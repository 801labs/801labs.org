---
title: Phishing/Scam campaign research
slug: phishing-campaign-research
date_published: 2018-10-27T05:12:56.000Z
date_updated: 2018-10-31T21:57:01.000Z
tags: research, phishing
description: An email came in that an end user thought was suspicious. The end user passed it up to one of our team members, who then passed it up to me.
cover: 'image-3.jpg'
author_name: Pips
author_avatar: 'avatars/pips.jpg'
---

An email came in that an end user thought was suspicious. The end user passed it
up to one of our team members, who then passed it up to me.

![](image.jpg "Initial phishing email")

To start off, this email is just dumb. The sender never bothered to copy
legitimate Microsoft email formatting, and the wording is just strange. It
doesn’t inspire even the most inexperienced users to “_**rectify password
expiration**_”. Just for fun, let’s look at the url.

![](image-2.jpg "Suspicious url")

`hxxp://piba.org.br` isn’t a known phishing site, it goes to a Portuguese church
website. The site doesn’t matter, what does matter is it looks like the script
is being ran through a compromised WordPress site, since it’s going through a
`/wp-content/` uploads folder. It appears that somebody could upload a script to
the WordPress site that acts as a pass-through to further obfuscate and prevent
the campaign from being detected.

Once you click the link that passes through WordPress, you end up at a
not-so-convincing office 365 login page.

![](image-3.jpg "Bad credential harvesting page")

The email address in the link autofills the email box for your account. Let’s
point out some interesting things about this scam site though.

- the copyright on the bottom of the page has the **wrong year**.
- The site doesn't fill the entire page.
- The buttons and links don't work

Why don’t they work? Because they’re **images**.

![](image-4.jpg "Everything is a background image, instead of HTML/CSS")

Let’s look at the url and domain. `hxxp://fwclub.co.za/` is a winemaker’s club.
It also doesn’t appear to be running any special framework either that would be
exploitable.

![](image-5.jpg "No interesting services detected")

There are quite a few open ports as well on this server, four of them are
CPanel. It’s possible that the person running this phishing campaign got access
to the site’s CPanel and piggybacked off their normal traffic.

Back to the original url, `hxxp://fwclub.co.za/includes/Office1/Login.php`. If
we try one directory up, `/Office1/`, it redirects back to this script. So, lets
go up another directory to `/includes/`.

![](image-6.jpg "All the scripts!")

Hmm, looks like directory listing is turned on, and… there’s a recent backup of
their phishing campaign. Let’s look at this backup.

![](image-7.jpg)

Yup, that’s the source code to the credential dumping code. A day later, the
domain is shut down in one form or another :(

![](image-8.jpg)

Sophos also flagged the site, finally.

![](image-9.jpg)

Well, we’ve still got their source code, so let’s take a look.

`blocker.php` is a very interesting file.

![](image-10.jpg)

The code uses a function I’ve never actually seen in PHP before,
`gethostbyaddr()`, which attempts to lookup the incoming IP address to a
hostname and possibly an identifier, like as Google or AWS, as well as the host
names for a few other malware and phishing scanners.

It also has a list of banned IP addresses, ranges from Google, Cogent, Digital
Ocean, ISC, EQNET, INSC, Amazon, Softlayer, EIG, NTT America, MX Logic, British
Telecom, Nianet, Elisa, GigeNET, University Of Minnesota(?), NetVision, NET1
Plus, Unified Webhosting, MULTACOM, China Unicom, Dassault Systèmes, Hurricane
Electric, CoreSpace, SITA, Orange S.A, Cyber Wurx, CYBERCON, Zayo Bandwidth,
Savvis, QTS, Kasetsart University in Thailand(?), Chungnam National University
in South Korea(?), RCC, USAA, Comverse, Omnico Hosting, AT&T, Marlink,
Airstream, The Department of Defense Network Information Center, and DataPipe.
Whew, that was a long list.

The major group of IP ranges are hosting providers that have a large amount of
traffic for VPN/Proxy services. It would make sense that the Phisher’s target
audience falls outside of hosting companies, it falls to individual users and
companies. The second interesting group of IPs are for a few Universities, none
in the list make any sense though. Only one of them has a recognized
Cybersecurity course. It appears that MXLogic is also on the list, probably to
avoid enterprise email filtering detection for companies that use it. I also
found it a little interesting that they blocked the DoD as well.

The last bit of code simply checks if the useragent falls under msnbot, google
bot, yahoo bot, etc. They also have a robots.txt that does the same thing.

Once it has checked the incoming request, the index.php file sets the header
(URL) to something along the lines of
`login.php?websrc=<random numbers>&dispatched=<random numbers>&id=<random numbers>&email=<compromised email>`.
It’s interesting that the phishing author attempted to make the URL look more
legitimate and lengthy, as many official emails are.

![](image-11.jpg)

Once it goes to the Login.php page, it loads the two images and two text boxes
that are supposed to look like, and auto fills the email address, to make it
look more “authentic”.

On the form submit, it hits `logon.php` (not login). Here’s where something
interesting happens. The first thing the script does, is gets the visitors
country from geoplugin.net. The second thing it does, is craft a basic email and
loads in the submitted username, password, ip, browser, date, and geoip lookup.
It then sets the TO: field of this email to ipconfigura@gmail.com, the subject
to `“Office365 | <country> | <username>”` and lastly sets the FROM: field to
`“John De Fisher <new@cpanel.com>”`.

![](image-12.jpg)

After it crafts this email, it then runs a function called `check()` from inside
a PHPMailer directory from the script `smtp.php`, and passes the submitted
username and password. Let’s look at this script then.

![](image-13.jpg)

This `check()` function is incredibly clever. It connects to the office365 SMTP
server, authenticates with the server using the submitted credentials, sets the
FROM field to the email `hbergamini@truehomesusa.com`. This is interesting,
`truehomesusa.com` doesn’t seem to be flagged and is a legitimate website, they
even run on office 365. I take an educated guess and figure that this domain has
not fully set up the correct MX records to protect their domain from email
spoofing, allowing this test email to not be noticed by most people and not
appear in anybody’s inbox. Clever. It then checks to see if the email sent. If
it could send, it means that the submitted credentials successfully
authenticated with Microsoft and are correct.

This is something I don’t see that often. It’s commonplace for campaigns to
accept and send off any credentials it gets, but this one is checking the
validity of the credentials. It also allows the phishing author to provide a
“Password not recognized” message, to skeptical users who input a wrong password
the first time to see if it works or not.

![](image-14.jpg)

Aaand that's the analysis of this phishing campaign.

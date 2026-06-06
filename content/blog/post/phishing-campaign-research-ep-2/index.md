---
title: Phishing/Scam campaign research (ep. 2)
slug: phishing-campaign-research-ep-2
date_published: 2018-10-31T21:57:10.000Z
date_updated: 2018-11-15T01:33:29.000Z
tags: research, phishing
description: I got another email. This one was interesting, the email was the standard "we had a rat on your computer that we used to take dirty pictures of you, give us money or we will  send it to all your contacts".
cover: 'chrome_2018-11-14_11-31-28.png'
author_name: Pips
author_avatar: 'avatars/pips.jpg'
---

I got another email. This one was interesting, the email was the standard "we
had a rat on your computer that we used to take dirty pictures of you, give us
money or we will send it to all your contacts".

This is the email that I received.

![](image-17.png "The scam email")

It's a fairly standard "give us money or we send dirty photos we took to your
contacts" kind of scam email, but this one actually does something that I have
not seen previously. The scammers establish "credibility" by actually telling
you what your password is. The scammers purchased a dumped site database (that
assumedly did not hash or salt passwords), correlated the email address in the
DB, and sent out an email.

This scam is incredibly effective when you consider that a vast majority of
people use the same password for every account.

This scam also does something unique; they spoofed the sender of this email to
be me.

    Delivered-To: hello@[redacted]
    Received-SPF: none (zoho.com: 171.99.132.162 is neither permitted nor denied by domain of [redacted]) client-ip=171.99.132.162; envelope-from=hello@[redacted]; helo=171-99-132-162.static.asianet.co.th;
    Authentication-Results: mx.zohomail.com;
        spf=none (zoho.com: 171.99.132.162 is neither permitted nor denied by domain of [redacted])  smtp.mailfrom=hello@[redacted]
    Received: from 171-99-132-162.static.asianet.co.th (171-99-132-162.static.asianet.co.th [171.99.132.162]) by mx.zohomail.com
        with SMTP id [redacted]; Mon, 29 Oct 2018 19:47:47 -0700 (PDT)

This was an interesting way of finding out that my mail server has incorrectly
configured SPF records. This establishes ~~darknet spooky hacker credibility~~
by sending an email as you.

I am going to take a shot in the dark that they try several different techniques
to do this. The first, is just standard SPF record spoofing to send the message.
Since the boilerplate message contains
`Please don't try to contact me or find me, it is impossible, since I sent you an email from your email account.`,
I am going to assume that sending mail as the recipient is part of the scam in
general.

I also have another theory, that when they send the mail, if SPF records prevent
spoofing, that they then try to authenticate with the target mail server to
craft the email using the harvested credentials. This would also prove to the
scammers if the harvested credentials were valid. This is a technique that has
been seen in the wild in previous phishing campaigns, talked about
[here](../phishing-campaign-research/).

Digging a little deeper and looking at the email headers above, the IP that sent
the email is `171.99.132.162`. This IP appears to be a standard telecom IP
address, belonging to a Broadband ISP located out of Bangkok, Thailand.

![](image.png)

Riskiq also only has two carrier-assigned DNS records for this IP address

![](image-1.jpg)

It appears that this IP is for sure a private (possibly residential IP). Is this
IP the actual IP of the scammer? I hope they they wouldn't be so dumb, but who
knows. Lets poke at it on [Shodan](https://www.shodan.io).

![](image-2.png)

The only running service on this host is a web server. Ohhh boy, that's great.
Since there was no DNS record for a TLD pointing towards this IP, it's safe to
assume that it is a residential/business host that opened up a web server for
something, or the scammer is running this from their home IP and has a web
server running. Lets see whats on it.

![](image-3.jpg)

It appears this IP address is hosting a Hikvision camera control panel. Cameras
are the number one compromised host for botnets or malicious activity on the
internet. It's easy to assume that the person hosting this publicly accessible
camera control panel left it with default passwords, and somebody logged in and
compromised one of the cameras, adding it to a botnet.

Aside from trying to log in (illegal) there's nothing more I can do for this
research. :(

---
title: "Biohacking: New VivoKey Spark Implant"
slug: first-vivokey-spark
date_published: 2018-12-12T23:42:05.000Z
date_updated: 2019-01-09T01:41:06.000Z
tags: biohacking, RFID
cover: '091816humanchip_1280x720.jpg'
author_name: Pips
author_avatar: 'avatars/pips.jpg'
---

So, I got a VivoKey Spark. No, not a VivoKey Flex. This is a new product from
VivoKey, that is currently 100% unreleased.

The Spark is similar to the Flex One from VivoKey, but this one, instead of
being a flat flexible strip, is in a small glass tube just like every other RFID
implant. It's small, compact, and feature rich.

First, let's talk about what VivoKey is trying to accomplish. While all of their
marketing is practically non-existent on just about anything they're doing,
going so far as to have a one page website with no feature or technical
information. However we can still work out some things from what is available.

The VivoKey is...

- RFID-based implantable technology
- Runs on NFC frequency and protocol.
- Aims to be a device capable of

- PGP/GPG storage
- 2FA storage
- Payment applications

- Tap to pay
- Wallets
- Addresses

- Access control
- Any other RFID/NFC-based technology implementations

VivoKey is a product that's still in it's very early stages, all things
considered. The
[VivoKey Flex recently just entered beta](https://dangerousthings.com/shop/vivokey-flex-one/).
The VivoKey Spark has not even been announced yet (it is expected to be
announced at BDYHAX in the 15th of December). Very little is known about this
product, and all information is coming from secondary sources. It is reported
that the Spark has less overall storage space, due to its physically small size,
but unknown how much of a disparity in storage there will be.

I acquired the Spark through [@c00p3r](https://twitter.com/c00p3r_7), who runs
the Dangerous Minds podcast and is a good friend of DC801. Cooper acquired the
Sparks early, directly from Amal @ Dangerous Things. It turns out that neither
Amal or Cooper have gotten these implanted. Looks like I am the very first
person to have a VivoKey Spark doin' things in their body.

> Oooo, what&#39;s this?
> 😁[@DangerousThings](https://twitter.com/DangerousThings?ref_src=twsrc%5Etfw)
> [@c00p3r_7](https://twitter.com/c00p3r_7?ref_src=twsrc%5Etfw)
> [@dmindspodcast](https://twitter.com/dmindspodcast?ref_src=twsrc%5Etfw)
> [pic.twitter.com/UhtW7mDKZb](https://t.co/UhtW7mDKZb) &mdash; Pips (@Pips801)
> [December 10, 2018](https://twitter.com/Pips801/status/1072276390173532162?ref_src=twsrc%5Etfw)

![](image.jpg)

On opening, there is a card that tells you to STOP! and not continue until you
visit [vivokey.com/spark](http://vivokey.com/spark). Sadly, the page does not
exist (yet). Once I got it, I immediately drove over to a local piercing studio
and got it installed.

Below is the installation video of the VivoKey Flex.You don't have to watch it,
but if you're curious about the process, it's a quick video.

A description of the video: Hand is sanitized and the needle comes pre-loaded
with the glass tag alredy. the needle is pushed through the skin, and the
plunger is pressed while removing the needle and leaving the tag behind. In the
video, the tag actually was slightly stuck to the needle on removal, so the
needle/tag was pushed back in to make sure it stayed.

Once installed, it was time to scan. The major exciting feature is Fidesmo and
their application development stack. However, scanning the tag with the Fidesmo
app did not work at all. It appears this does not directly register as a
Fidesmo/Fidesmo-capable chip.

If you scan it with an NFC app, it reveals this information about the tag.

![](image-1.jpg)

The tag appears to be emulating a standard NFC tag with enough storage to store
a URL on it in the standard NFC URL format. The url is unique per chip. However,
when I visit the URL, it forwards me to
[https://www.vivokey.com/claim-my-spark](https://www.vivokey.com/claim-my-spark),
which just says "coming soon".

It appears that the chip used in the VivoKeys has the ability to
emulate/virtualize NFC partitions on it. This one virtualized a standard ISO
15693 tag with a size just big enough to store the registration URL (49/49
Bytes).

I assume that this is the page where you register the Spark, and probably
download an app or something that allows you to actually interact with the
device.

Now that a member of DC801 has a VivoKey Spark, we can finally start hacking on
it and writing applications for it. All of our research, development, and
hacking will be cataloged right here on the 801Labs Research site. Click
subscribe below to be kept up to date! 🙌

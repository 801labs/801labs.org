---
title: A 9-step recipe to crack a NTLMv2 Hash from a freshly acquired .pcap
slug: cracking-an-ntlmv2-hash
date_published: 2018-12-18T22:00:00.000Z
date_updated: 2018-12-18T23:58:34.000Z
tags: how to, pcap
description:
cover: 'CredUIHTTPAuth.jpg'
author_name: kimb3r
author_avatar: 'avatars/kimb3r.jpg'
---

1. Open your .pcap that contains an NTLMv2 hash in Wireshark.
2. Filter by ntlmssp to get the authentication handshake.

![](image-3.jpg "artisanal smb2 authentication packets")

3. In this case, we get three packets. Find the NTLMSSP_AUTH packet. Filter the
   packet down to the Security Blob layer to get to the juicy good stuff:

![](image-5.png "the goods")

4. Copy out the domain name and user name to a text document.

5. Drill down into the NTLM Response section to find NTProofStr and NTLMv2
   response. Copy both of these out to the text document as a Hex String.

![](image-6.jpg "cross the streams")

6. Notice that NTLMv2Response begins with the ntlmProofStr, so delete the
   ntlmProofStr from the NTLMv2Response.

![](image-7.jpg)

7. Enter ntlmssp.ntlmserverchallenge into the search filter. This will highlight
   the packet where the NTLM Server Challenge is found, generally the packet
   before the NTLM_Auth packet. Copy this value to the text document as a Hex
   String.

![](image-8.jpg)

8. Put the values into the following format and save it as crackme.txt:

username::domain:ServerChallenge:NTproofstring:modifiedntlmv2response

![](image-12.png)

9. Find your favorite password list (RockYou? best_1000_passwords2018.txt?) and
   open a terminal to use hashcat to run:

> hashcat -m 5600 crackme.txt passwordlist.txt

and it will give you the user's password!

![](image-13.png "congrats on the hax!")

sources for more information:

- [https://www.root9b.com/newsroom/attacking-windows-fallback-authentication/](https://www.root9b.com/newsroom/attacking-windows-fallback-authentication/)
- [https://foxglovesecurity.com/2016/09/26/rotten-potato-privilege-escalation-from-service-accounts-to-system/](https://foxglovesecurity.com/2016/09/26/rotten-potato-privilege-escalation-from-service-accounts-to-system/)

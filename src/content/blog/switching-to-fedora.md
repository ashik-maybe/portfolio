---
title: "Breathed New Life Into My EliteBook 840 G3 With Fedora"
description: "Windows 10 was choking on 8GB of RAM. Here is why I switched my daily driver hardware to Linux."
date: "2026.05.17"
tags: ["Linux", "Hardware"]
tagLabel: "OS MIGRATION LOG"
---

My **HP EliteBook 840 G3** has been a reliable machine, but lately, running modern Windows 10 on an Intel i5-6300U with only 8GB of RAM felt like a losing battle. Boot times were getting sluggish, idle RAM usage hovered around 60%, and simple tasks felt heavy.

Instead of buying a new laptop, I decided to back up my files and flash **Fedora Linux (Workstation)** onto it. Here is a quick log of how it went and my initial impressions.

## Why Fedora?

I wanted a distribution that was stable but still shipped with up-to-date software packages. Fedora's default GNOME desktop environment is clean, gesture-heavy, and fits a laptop workflow incredibly well.

### The Performance Difference

The hardware feels brand new. Here is a quick comparison of what changed immediately after the installation:

- **Idle RAM Usage:** Dropped from roughly **4.8GB** on Windows to just under **1.2GB** on Fedora.
- **CPU Spikes:** The constant background search indexing and telemetry processes that used to make my laptop fans spin up randomly are completely gone.
- **Battery Life:** Power management on Linux has gotten incredibly efficient; I'm getting noticeably more screen-on time during light coding sessions.

> "You don't always need better hardware. Sometimes, you just need a lighter operating system."

## The Learning Curve

It hasn't been completely effortless. Getting used to installing packages via terminal commands rather than downloading `.exe` installers took a day or two to get used to, but it makes managing dependencies so much cleaner.

```bash
# My first line of action after booting into the new setup:
sudo dnf upgrade --refresh
```

## Final Verdict

If you have an older laptop like an EliteBook sitting around struggling under modern Windows builds, don't throw it out. Running a clean Linux distribution like Fedora skips the software bloat and gives older dual-core processors plenty of breathing room to handle modern web development tools.

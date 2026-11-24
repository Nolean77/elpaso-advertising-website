---
title: "November 2026 Core Web Vitals Data: Most Big-Name Sites Fail on Phones. How to Check Yours"
description: "Reports dated November 19, 2026 found most of the big-name sites studied failed mobile Core Web Vitals. See how to check your own website in one evening."
pubDate: 2026-11-23
author: Nolean Francisco
authorTitle: Web Developer & AI Specialist
tags: ["core web vitals", "website speed", "mobile", "page experience", "small business"]
language: en
draft: true
featuredImage: "/Blog/mobile-core-web-vitals-check.jpg"
featuredImageAlt: "Illustration of a smartphone on a wooden stand at dusk with a simple web page of plain color blocks on its screen and glowing speed lines sweeping past it, beside a magnifying glass and a blank stopwatch, with a laptop behind it and desert mountains, ocotillo and yucca-like plants outside the window."
---

If your website feels slow on a phone, you're in big company. Two reports dated November 19, 2026 looked at some of the largest sites on the web, and most of them failed Google's Core Web Vitals on mobile. A much wider dataset is more hopeful. Here's what each found and how to check your own site.

## What the November 2026 Core Web Vitals reports found

[Shifter](https://shifter.io/blog/core-web-vitals-top-1000-sites-2026), a residential-proxy company, pulled Google's Chrome UX Report data for the top 1,000 domains in the Tranco ranking. For the 28 days to November 17, 2026, 34.3% of the sites with enough data passed all three Core Web Vitals on phones, and 60.0% passed on desktop. By our arithmetic, that leaves 65.7% of those sites failing on phones. Among the 48 top-100 sites with data, only 27% passed on phones.

The agency Digital Silk tested the homepage of every Fortune 500 company in Google PageSpeed Insights and shared the results in a [press release dated November 19, 2026](https://www.prnewswire.com/news-releases/3-in-4-fortune-500-companies-fail-googles-user-experience-benchmarks---digital-silk-302945095.html). Of the 496 sites that returned results, 369 failed on mobile, desktop or both. On mobile, 65% failed, compared with 51% on desktop.

The wider web looked better. The November 2026 edition of [corewebvitals.io's State of Web Vitals](https://www.corewebvitals.io/state-of-cwv/) covers 242,967 sites in total. Among the 145,339 sites with phone field data, 69.7% passed all three on mobile. In that broad dataset, most sites passed.

These studies use different samples and methods. Shifter and corewebvitals.io use Chrome UX Report real-user data over 28-day windows, while Digital Silk ran PageSpeed Insights homepage tests. Each number stays with its own study.

## Why big names fail on phones more than the wider web

In Shifter's top 1,000 data, size didn't help. The 48 top-100 sites with data passed on phones at 27.1%, compared with 34.8% for ranks 101 to 500 (198 sites) and 35.2% for ranks 501 to 1,000 (293 sites).

Shifter's biggest phone problem was responsiveness. Only 51.4% of those top sites had a good INP score on phones, against 90.9% on desktop. On what drives INP, Shifter writes that "Heavy JavaScript, third-party tags and slow phones all show up in it."

Digital Silk's Fortune 500 homepages showed a different weak spot. The median mobile LCP was 2.4 seconds, just under Google's 2.5-second line, and 44% missed the LCP target on mobile, compared with 32% for INP.

Our own reasoning, which none of these reports measured, is that big brand sites tend to carry more scripts, tags, and large images, and phones usually have less power and slower connections than desktops. That may explain part of the gap.

## The three numbers Google measures, in plain English

[Google's Core Web Vitals page](https://developers.google.com/search/docs/appearance/core-web-vitals) (last updated December 10, 2025) describes three metrics and sets a target for each.

- **Largest Contentful Paint (LCP)** measures loading. Google's target is for LCP to occur within the first 2.5 seconds of the page starting to load.
- **Interaction to Next Paint (INP)** measures responsiveness, or how fast the page reacts when someone taps or clicks. Google's target is an INP of less than 200 milliseconds.
- **Cumulative Layout Shift (CLS)** measures visual stability, meaning how much the page jumps around. Google's target is a CLS score of less than 0.1.

Google's [page experience guide](https://developers.google.com/search/docs/appearance/page-experience) (last updated September 22, 2026) adds self-check questions, including whether your pages have good Core Web Vitals, are served securely, and display well on mobile devices.

## Where slow phone pages usually go wrong

In the November 2026 edition of corewebvitals.io, 18.1% of the 145,339 sites with phone field data missed the 2.5-second LCP line. The report says most of those misses begin before anything renders, either in the HTML or on the server. A few patterns stand out in that dataset.

- **Lazy-loading the main image.** Among sites whose LCP element is an image, 17.3% put loading="lazy" on that very image, which makes the browser wait before requesting it. Median resource load delay was 252 ms with default loading and 436 ms with lazy loading.
- **Putting the main image in CSS.** 27.2% of sites reference their LCP element in a stylesheet. Among sites with the LCP element in the HTML, 84% passed LCP, compared with 77% when it sat in CSS and 70% when JavaScript injected it.
- **Server protocol.** Sites serving their HTML over HTTP/3 had a 525 ms median time to first byte, compared with 718 ms on HTTP/2.

For Fortune 500 homepages, Digital Silk reports that of the 324 sites that failed on mobile, 111 missed only the loading target.

In Shifter's top 1,000 sample, INP was the most common phone failure, and Shifter advises auditing long JavaScript tasks, third-party scripts, and whatever runs on the first tap.

So the studies don't agree on one main culprit. Loading led in the broad corewebvitals.io dataset and among Fortune 500 mobile misses. Responsiveness led for Shifter's top 1,000. Your site could look like either, so check rather than guess.

## What Google says Core Web Vitals do, and don't do, for rankings

Google's page experience guide says plainly that "Core Web Vitals are used by our ranking systems." Google also recommends that site owners achieve good Core Web Vitals for success with Search and for a great user experience generally.

Google is just as plain about the limits. Good results in Search Console or third-party tools don't guarantee your pages will rank at the top, and there's more to page experience than these scores. Google says Search always tries to show the most relevant content, even when a page's experience is weak. There is no single page experience signal. And Google adds that chasing a perfect score purely for SEO may not be worth your time.

Treat these scores as a way to serve visitors better, not a ranking shortcut.

## A one-evening check for a small-business site

None of these studies measured small-business or local sites. The checklist below is our own reasoning, built on the tools the sources point to.

1. **Open the Core Web Vitals report in Search Console.** Google points site owners there to see how their pages perform.
2. **Run your homepage and one key page through PageSpeed Insights.** That's the tool Digital Silk used. Read the mobile result first. Google's page experience guide also lists Chrome Lighthouse as a resource.
3. **Test on a real phone.** Load your site over mobile data, tap the menu and a main button, and note anything slow or jumpy.
4. **Fix the main image first.** If your largest image near the top is lazy-loaded or set as a CSS background, move it into the HTML and let it load normally.
5. **Trim your scripts.** Remove chat widgets, trackers, and plugins you no longer use.

If you serve customers in El Paso and across the borderplex who mostly find you on their phones, the mobile result is the one to watch first. That's general advice, not a local measurement.

If you'd rather run this check with someone, EPAS builds and tunes websites for small businesses in English and Spanish. See our [website services](/#services) and tell us what you're seeing.

<!-- Patch-only step 3 by Ollie from Clara's 02-draft · App: ChatGPT, Ollie (Workspace project) · Model: GPT-6 · Thinking effort High (selected; run effort not confirmable from UI) · Chat mode · Chat: https://chatgpt.com/g/g-p-6ac7b7a72ccc8191bee2a9101e3dde07-ollie-workspace/c/6b05059a-3310-83e8-a02b-66bc5a7d8338 · Fact-check: Ollie live curl 200 (honest UA), Nov 23 20:27 MST · Drafted in Claude (Opus 5.5, High, Auto), chat https://claude.ai/chat/b1f7d6e3-6906-478c-9705-f06ca55480a7 · Reviewer: Atlas (final check) · Proposed slug (filename): mobile-core-web-vitals-check -->

# Black in AI custom code doc

We're using GSAP for animations on this website.

## Scripts

Dependencies scripts connected in global site settings.
Functions that used on all pages pasted into global site settings.
Code located on the each page.
Repository for refference:
https://github.com/MaxChechel/Black-in-AI

## Initial styles for elements

All animated elements have initial states(opacity:0 , transform, etc.) applied with CSS.
We need this to avoid flash of unstyled content on a page load(flicker).
CSS styles for this included in page settings on each page and small portion in site global settings.

As addition we have default CSS styles pasted into noscript right after initial styles for aniamted elements.
Those are opposite to the insitial styles for the animations. We need them for the cases if JavaScript disabled in a user browser.

## Font load detection

Becasue we're using splitting of the text into lines, words and characters(Split-type) in animations this can lead to bugs.
To avoid bugs we using font load detection for "DM Sans". Code running after font is loaded

## Sliders

All sliders in the project built with Swiper JS. CSS styles for customization located inside Global Styles CSS symbol.
Default CSS loaded in a project global settings.

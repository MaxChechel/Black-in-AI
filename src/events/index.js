import gsap from "gsap";

import gradientButton from "../utils/gradientButton";
import ctaGradientBg from "../utils/ctaGradientBg";
import dotsPattern from "../utils/dotsPattern";

document.fonts
  .load('1em "DM Sans"')
  .then(function () {
    ctaGradientBg();
    dotsPattern();
    gradientButton();

    //////Hero
    const navLinks = gsap.utils.toArray(
      ".navbar_link:not(.is-dropdown), .navbar_dd-wrap"
    );

    const heroTl = gsap.timeline();
    heroTl
      .to(
        "h1",
        {
          delay: 0.3,
          y: "0%",
          autoAlpha: 1,
          duration: 0.6,
          ease: "circ.out",
        },
        0
      )
      .to(
        ".events_search_wrapper",
        {
          y: "0%",
          autoAlpha: 1,
          duration: 0.55,
          ease: "circ.out",
        },
        "<20%"
      )
      .to(
        ".events_dropdown-filter",
        {
          y: "0%",
          autoAlpha: 1,
          duration: 0.55,
          ease: "circ.out",
        },
        "<20%"
      )
      .to(
        ".events_tab-menu",
        {
          y: "0%",
          autoAlpha: 1,
          duration: 0.55,
          ease: "circ.out",
        },
        "<20%"
      )
      .to(
        ".news_item",
        {
          y: "0%",
          autoAlpha: 1,
          duration: 0.6,
          ease: "circ.out",
          stagger: { each: 0.055 },
        },
        "<30%"
      )
      .to(
        ".navbar_logo-link",
        {
          y: "0%",
          autoAlpha: 1,
          duration: 0.55,
          ease: "circ.out",
        },
        "<15%"
      )
      .to(
        navLinks,
        {
          y: "0%",
          autoAlpha: 1,
          duration: 0.55,
          ease: "circ.out",
          stagger: { each: 0.035, from: "start" },
        },
        "<10%"
      )
      .to(
        ".navbar_button-wrapper",
        {
          y: "0%",
          autoAlpha: 1,
          duration: 0.55,
          ease: "circ.out",
        },
        "<35%"
      );
  })
  .catch(function () {
    console.log("Font failed to load");
  });

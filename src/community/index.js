import gsap from "gsap";
import SplitType from "split-type";
import ScrollTrigger from "gsap/ScrollTrigger";

import gradientButton from "../utils/gradientButton";

import gradientBg from "../utils/gradientBg";
import dotsPattern from "../utils/dotsPattern";

import imagesParallax from "../utils/imagesParallax";

document.fonts
  .load('1em "Tt Hoves Pro Trial Variable"')
  .then(function () {
    gradientBg();
    dotsPattern();
    gradientButton();
    imagesParallax();

    //Split lines
    const splitLines = new SplitType(
      "h1, .about-header_content-right p, [data-animate] h2, [data-animate] p, .team-header_component p, .team_row-wrap h3",
      {
        types: "lines",
        lineClass: "split-line",
      }
    );
    // const splitChars = new SplitType(
    //   ".stats-mission_number:not(.gradient-text)",
    //   {
    //     types: "chars",
    //     charClass: "char",
    //   }
    // )

    //////Hero
    const navLinks = gsap.utils.toArray(
      ".navbar_link:not(.is-dropdown), .navbar_dd-wrap"
    );

    gsap.set("h1, .about-header_content-right p", {
      autoAlpha: 1,
    });

    const heroTl = gsap.timeline();
    heroTl
      .to(
        "h1 .split-line",
        {
          delay: 0.3,
          y: "0%",
          autoAlpha: 1,
          duration: 0.6,
          ease: "circ.out",
          stagger: { each: 0.055 },
        },
        0
      )
      .to(
        ".home-header_content-wrap .button-group a",
        {
          y: "0%",
          autoAlpha: 1,
          duration: 0.55,
          ease: "circ.out",
          stagger: { each: 0.035 },
        },
        "<15%"
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

    ///////Offering list
    const ofListSections = document.querySelectorAll(".section_offerings-list");
    ofListSections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 60%",
        end: "top 50%",
        invalidateOnRefresh: true,
        onEnter: () => {
          const tl = gsap.timeline();
          tl.to(section.querySelector("h2"), {
            y: "0%",
            autoAlpha: 1,
            duration: 0.6,
            ease: "circ.out",
          }).to(
            section.querySelectorAll(".offering-list_item "),
            {
              y: "0%",
              autoAlpha: 1,
              duration: 0.6,
              ease: "circ.out",
              stagger: { each: 0.055 },
            },
            "<30%"
          );
        },
      });
    });

    ///////Section Highlights
    const highlights1 = gsap.utils.toArray(
      ".highlights-cms-item:first-child div, .highlights-cms-item:first-child h3, .highlights-cms-item:first-child a"
    );
    const highlights2 = gsap.utils.toArray(
      ".highlights-cms-item:last-child div, .highlights-cms-item:last-child h3, .highlights-cms-item:last-child a"
    );
    ScrollTrigger.create({
      trigger: ".section_highlights-light",
      start: "top 70%",
      end: "top 50%",
      invalidateOnRefresh: true,
      onEnter: () => {
        const tl = gsap.timeline();
        tl.to(".section_highlights-light h2", {
          y: "0%",
          autoAlpha: 1,
          duration: 0.6,
          ease: "circ.out",
        })
          .to(
            ".highlights_divider",
            {
              height: "100%",
              duration: 0.6,
              ease: "circ.out",
            },
            "<10%"
          )
          .to(
            highlights1,
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
            highlights2,
            {
              y: "0%",
              autoAlpha: 1,
              duration: 0.6,
              ease: "circ.out",
              stagger: { each: 0.055 },
            },
            "<10%"
          );
      },
    });

    //////////News
    ScrollTrigger.create({
      trigger: ".news_component",
      start: "top 60%",
      end: "top 50%",
      invalidateOnRefresh: true,
      onEnter: () => {
        const tl = gsap.timeline();
        tl.to(".news_component h2", {
          y: "0%",
          autoAlpha: 1,
          duration: 0.6,
          ease: "circ.out",
        })
          .to(
            ".news_component .news_button-row",
            {
              y: "0%",
              autoAlpha: 1,
              duration: 0.55,
              ease: "circ.out",
            },
            "<60%"
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
          );
      },
    });

    ///////Pre footer CTA section
    ScrollTrigger.create({
      trigger: "[data-animate='section-cta-centered']",
      start: "top 55%",
      end: "top 50%",
      invalidateOnRefresh: true,
      onEnter: () => {
        const tl = gsap.timeline();
        gsap.set(
          "[data-animate='section-cta-centered'] h2, [data-animate='section-cta-centered'] p",
          {
            autoAlpha: 1,
            duration: 0,
          }
        );
        tl.to("[data-animate='section-cta-centered'] h2 .split-line", {
          y: "0%",
          autoAlpha: 1,
          duration: 0.6,
          ease: "circ.out",
          stagger: { each: 0.055 },
        })
          .to(
            "[data-animate='section-cta-centered'] p .split-line",
            {
              y: "0%",
              autoAlpha: 1,
              duration: 0.55,
              ease: "circ.out",
              stagger: { each: 0.02 },
            },
            "<50%"
          )
          .to(
            "[data-animate='section-cta-centered'] a",
            {
              y: "0%",
              autoAlpha: 1,
              duration: 0.55,
              ease: "circ.out",
            },
            "<15%"
          );
      },
    });
  })
  .catch(function () {
    console.log("Font failed to load");
  });

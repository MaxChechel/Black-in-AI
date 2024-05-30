import gsap from "gsap";
import SplitType from "split-type";
import ScrollTrigger from "gsap/ScrollTrigger";

import gradientButton from "../utils/gradientButton";
import gradientBg from "../utils/gradientBg";
import dotsPattern from "../utils/dotsPattern";
import imagesParallax from "../utils/imagesParallax";

gsap.registerPlugin("ScrollTrigger");

document.fonts
  .load('1em "Tt Hoves Pro Trial Variable"')
  .then(function () {
    gradientBg();
    dotsPattern();
    gradientButton();
    imagesParallax();

    //Split lines
    const splitLines = new SplitType(
      "h1, [data-animate] h2, [data-animate] p",
      {
        types: "lines",
        lineClass: "split-line",
      }
    );

    //////Hero
    const navLinks = gsap.utils.toArray(
      ".navbar_link:not(.is-dropdown), .navbar_dd-wrap"
    );

    gsap.set("h1, [data-animate] h2, [data-animate] p", {
      autoAlpha: 1,
    });

    const heroTl = gsap.timeline();
    heroTl
      .to(
        ".home-header_content .button-icon",
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
        ".home-header_content .button-group",
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
    ///////Blog header
    if (document.querySelector("[data-animate='blog-header']")) {
      ScrollTrigger.create({
        trigger: "[data-animate='blog-header']",
        start: "top 60%",
        end: "top 50%",
        invalidateOnRefresh: true,
        onEnter: () => {
          const tl = gsap.timeline();
          tl.to("[data-animate='blog-header'] h2 .split-line", {
            y: "0%",
            autoAlpha: 1,
            duration: 0.6,
            ease: "circ.out",
            stagger: { each: 0.055 },
          }).to(
            "[data-animate='blog-header'] p .split-line",
            {
              y: "0%",
              autoAlpha: 1,
              duration: 0.6,
              ease: "circ.out",
              stagger: { each: 0.055 },
            },
            "<25%"
          );
          if (
            document.querySelector(
              "[data-animate='blog-header'] .collection-header_author-wrapper"
            )
          ) {
            tl.to(
              "[data-animate='blog-header'] .collection-header_author-wrapper",
              {
                y: "0%",
                autoAlpha: 1,
                duration: 0.6,
                ease: "circ.out",
              },
              "<25%"
            );
          }
          tl.to(
            "[data-animate='blog-header'] .collection-header_image",
            {
              opacity: 1,
            },
            "<25%"
          );
        },
      });
    }
    //////Rich text
    ScrollTrigger.create({
      trigger: ".section_collection-content .text-rich-text",
      start: "top 60%",
      end: "top 50%",
      invalidateOnRefresh: true,
      onEnter: () => {
        const tl = gsap.timeline();
        tl.to(".section_collection-content .text-rich-text", {
          y: "0%",
          autoAlpha: 1,
          duration: 0.6,
          ease: "circ.out",
        });
      },
    });

    //////////News
    if (document.querySelector(".section_news")) {
      ScrollTrigger.create({
        trigger: ".section_news",
        start: "top 60%",
        end: "top 50%",
        invalidateOnRefresh: true,
        onEnter: () => {
          const tl = gsap.timeline();
          tl.to(".section_news h2", {
            y: "0%",
            autoAlpha: 1,
            duration: 0.6,
            ease: "circ.out",
          })
            .to(
              ".section_news .news_button-row",
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
    }
    //////Mission CTA
    ScrollTrigger.create({
      trigger: "[data-animate='2-col-banner']",
      start: "top 60%",
      end: "top 50%",
      invalidateOnRefresh: true,
      onEnter: () => {
        const tl = gsap.timeline();
        tl.to("[data-animate='2-col-banner'] h2 .split-line", {
          y: "0%",
          autoAlpha: 1,
          duration: 0.6,
          ease: "circ.out",
          stagger: { each: 0.055 },
        })
          .to(
            "[data-animate='2-col-banner'] p .split-line",
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
            "[data-animate='2-col-banner'] a",
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

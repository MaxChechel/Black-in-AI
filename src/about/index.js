import gsap from "gsap";
import SplitType from "split-type";
import ScrollTrigger from "gsap/ScrollTrigger";

import gradientButton from "../utils/gradientButton";
import ctaGradientBg from "../utils/ctaGradientBg";
import gradientBg from "../utils/gradientBg";
import dotsPattern from "../utils/dotsPattern";
import testimonialSlider from "../utils/testimonialsSlider";
import sliderCursor from "../utils/sliderCoursor";
import imagesParallax from "../utils/imagesParallax";
gsap.registerPlugin("ScrollTrigger");

document.fonts
  .load('1em "DM Sans"')
  .then(function () {
    gradientBg();
    ctaGradientBg();
    dotsPattern();
    testimonialSlider();
    sliderCursor();
    gradientButton();
    imagesParallax();

    //Split lines
    const splitLines = new SplitType(
      "h1, .about-header_content-right p, [data-animate] h2, [data-animate] p, .team-header_component h2, .team-header_component p, .team_row-wrap h3",
      {
        types: "lines",
        lineClass: "split-line",
      }
    );

    //////Hero
    const navLinks = gsap.utils.toArray(
      ".navbar_link:not(.is-dropdown), .navbar_dd-wrap"
    );

    gsap.set(
      "h1, .about-header_content-right p, [data-animate] h2, [data-animate] p",
      {
        autoAlpha: 1,
      }
    );

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
        ".about-header_content-right p .split-line",
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

    //////Mission CTA
    ScrollTrigger.create({
      trigger: "[data-animate='2-col-banner']",
      start: "top 60%",
      end: "top 50%",
      invalidateOnRefresh: true,
      onEnter: () => {
        const tl = gsap.timeline();
        gsap.set(
          "[data-animate='2-col-banner'] h2, [data-animate='2-col-banner'] p",
          {
            autoAlpha: 1,
            duration: 0,
          }
        );
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

    //////Story
    ScrollTrigger.create({
      trigger: "[data-animate='story']",
      start: "top 60%",
      end: "top 50%",
      invalidateOnRefresh: true,
      onEnter: () => {
        const tl = gsap.timeline();

        tl.to("[data-animate='story'] h2 .split-line", {
          y: "0%",
          autoAlpha: 1,
          duration: 0.6,
          ease: "circ.out",
          stagger: { each: 0.055 },
        }).to(
          "[data-animate='story'] p .split-line",
          {
            y: "0%",
            autoAlpha: 1,
            duration: 0.55,
            ease: "circ.out",
            stagger: { each: 0.02 },
          },
          "<50%"
        );
      },
    });

    ///////Team header
    ScrollTrigger.create({
      trigger: ".team-header_component",
      start: "top 60%",
      end: "top 50%",
      invalidateOnRefresh: true,
      onEnter: () => {
        const tl = gsap.timeline();
        gsap.set(".team-header_component h2, .team-header_component p", {
          autoAlpha: 1,
          duration: 0,
        });
        tl.to(".team-header_component h2 .split-line", {
          y: "0%",
          autoAlpha: 1,
          duration: 0.6,
          ease: "circ.out",
          stagger: { each: 0.055 },
        }).to(
          ".team-header_component p .split-line",
          {
            y: "0%",
            autoAlpha: 1,
            duration: 0.55,
            ease: "circ.out",
            stagger: { each: 0.02 },
          },
          "<10%"
        );
      },
    });

    ///////Team sections
    const teamSections = document.querySelectorAll(".team_row-wrap");
    teamSections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 60%",
        end: "top 50%",
        invalidateOnRefresh: true,
        onEnter: () => {
          gsap.set(section.querySelector("h3"), {
            autoAlpha: 1,
            duration: 0,
          });
          const tl = gsap.timeline();
          tl.to(section.querySelector("h3 .split-line"), {
            y: "0%",
            autoAlpha: 1,
            duration: 0.6,
            ease: "circ.out",
            stagger: { each: 0.055 },
          })
            .to(
              section.querySelectorAll(".people_cms-item"),
              {
                y: "0%",
                autoAlpha: 1,
                duration: 0.6,
                ease: "circ.out",
                stagger: { each: 0.025 },
              },
              "<50%"
            )
            .to(section.querySelector(".people_divider"), {
              width: "100%",
              duration: 0.6,
              ease: "circ.out",
            });
        },
      });
    });

    if (document.querySelector(".section_people-slider")) {
      const peopleSlider = new Swiper(".swiper.people-slider", {
        slidesPerView: "auto",
        spaceBetween: 64,
        loop: true,
        freeMode: true,
        pagination: false,
      });
    }
    /////Logo garden
    ScrollTrigger.create({
      trigger: "[data-animate='logo-garden']",
      start: "top 60%",
      end: "top 50%",
      invalidateOnRefresh: true,
      onEnter: () => {
        gsap.set("[data-animate='logo-garden'] h2", {
          autoAlpha: 1,
          duration: 0,
        });
        const tl = gsap.timeline();
        tl.to("[data-animate='logo-garden'] h2 .split-line", {
          y: "0%",
          autoAlpha: 1,
          duration: 0.6,
          ease: "circ.out",
        }).to(
          "[data-animate='logo-garden'] .sponsors-dark_wrapper",
          {
            autoAlpha: 1,
            y: "0%",
            duration: 0.8,
            ease: "circ.out",
            stagger: { each: 0.05, from: "start" },
          },
          "<0%"
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

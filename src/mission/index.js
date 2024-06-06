import gsap from "gsap";
import SplitType from "split-type";
import ScrollTrigger from "gsap/ScrollTrigger";

import ctaGradientBg from "../utils/ctaGradientBg";
import gradientBg from "../utils/gradientBg";

import gradientText from "../utils/gradientText";
gsap.registerPlugin("ScrollTrigger");
document.fonts
  .load('1em "DM Sans"')
  .then(function () {
    gradientBg();
    ctaGradientBg();

    gradientText();

    //Split lines
    const splitLines = new SplitType(
      "h1, .about-header_content-right p, [data-animate] h2, [data-animate] p, [data-animate='partnerships-2'] h3",
      {
        types: "lines",
        lineClass: "split-line",
      }
    );
    const splitChars = new SplitType(
      ".stats-mission_number:not(.gradient-text)",
      {
        types: "chars",
        charClass: "char",
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
        ".about-header_content-left a",
        { y: "0%", autoAlpha: 1, duration: 0.55, ease: "circ.out" },
        "<15%"
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

    ///////Stats
    gradientText(".stats-mission_number.gradient-text");

    const statsContainers = document.querySelectorAll(
      ".stats-mission_item-light"
    );

    statsContainers.forEach((item, i) => {
      const num = item.querySelectorAll(".stats-mission_number .char");
      const descr = item.querySelector("p");

      const tl = gsap.timeline({
        delay: i * 0.05,
        ease: "circ.out",
        scrollTrigger: {
          trigger: item,
          start: "top 70%",
          end: "top 40%",
          invalidateOnRefresh: true,
        },
      });
      tl.to(item, {
        autoAlpha: 1,
        y: "0%",
        stagger: { each: 0.015 },
      })
        .to(
          num,
          {
            y: "0%",
            autoAlpha: 1,
            stagger: { each: 0.03 },
          },
          "<25%"
        )
        .to(
          descr,
          {
            y: "0%",
            autoAlpha: 1,
          },
          "<20%"
        )
        .to(
          ".stats_component .button-group",
          {
            y: "0%",
            autoAlpha: 1,
            duration: 0.55,
          },
          "<10%"
        );
    });

    /////Partnerships
    ScrollTrigger.create({
      trigger: "[data-animate='partnerships-1']",
      start: "top 60%",
      end: "top 50%",
      invalidateOnRefresh: true,
      onEnter: () => {
        const tl = gsap.timeline();
        tl.to("[data-animate='partnerships-1'] h2 .split-line", {
          y: "0%",
          autoAlpha: 1,
          duration: 0.6,
          ease: "circ.out",
          stagger: { each: 0.055 },
        }).to(
          "[data-animate='partnerships-1'] p .split-line",
          {
            y: "0%",
            autoAlpha: 1,
            duration: 0.55,
            ease: "circ.out",
            stagger: { each: 0.02 },
          },
          "<55%"
        );
      },
    });
    ScrollTrigger.create({
      trigger: "[data-animate='partnerships-2']",
      start: "top 60%",
      end: "top 50%",
      invalidateOnRefresh: true,
      onEnter: () => {
        const tl = gsap.timeline();
        tl.to("[data-animate='partnerships-2'] h3 .split-line", {
          y: "0%",
          autoAlpha: 1,
          duration: 0.6,
          ease: "circ.out",
          stagger: { each: 0.055 },
        })
          .to(
            ".partnership_card",
            {
              autoAlpha: 1,
              y: "0%",
              stagger: { each: 0.015 },
            },
            "<20%"
          )
          .to(
            ".partnership_card img",
            {
              autoAlpha: 1,
              y: "0%",
              stagger: { each: 0.015 },
            },
            "<20%"
          )
          .to(
            "[data-animate='partnerships-2'] p .split-line",
            {
              y: "0%",
              autoAlpha: 1,
              duration: 0.55,
              ease: "circ.out",
              stagger: { each: 0.02 },
            },
            "<55%"
          )
          .to(
            "[data-animate='partnerships-2'] a",
            {
              y: "0%",
              autoAlpha: 1,
              duration: 0.55,
            },
            "<10%"
          );
      },
    });

    //////Tier sponsors
    const tierContainer = document.querySelectorAll(".tier-type_grid");
    tierContainer.forEach((container) => {
      const heading = container.querySelector("h3");
      const divider = container.querySelector(".tier_divider");
      const logos = container.querySelectorAll(".sponsors-dark_item");

      ScrollTrigger.create({
        trigger: container,
        start: "top 60%",
        end: "top 50%",
        invalidateOnRefresh: true,
        onEnter: () => {
          const tl = gsap.timeline();
          tl.to(heading, {
            y: "0%",
            autoAlpha: 1,
            duration: 0.6,
            ease: "circ.out",
          })
            .to(
              divider,
              {
                width: "100%",
                duration: 0.6,
                ease: "circ.out",
              },
              "<20%"
            )
            .to(
              logos,
              {
                autoAlpha: 1,
                y: "0%",
                duration: 0.8,
                ease: "circ.out",
                stagger: { each: 0.025, from: "random" },
              },
              "<20%"
            );
        },
      });
    });

    /////Sponsors grantors
    const headerSections = gsap.utils.toArray(
      "[data-animate='philanthropic'], [data-animate='donors'], [data-animate='tiers-sponsors']"
    );
    headerSections.forEach((section) => {
      const heading = section.querySelectorAll("h2 .split-line");
      const text = section.querySelectorAll("p .split-line");
      const btn = section.querySelectorAll("a");
      ScrollTrigger.create({
        trigger: section,
        start: "top 60%",
        end: "top 50%",
        invalidateOnRefresh: true,
        onEnter: () => {
          const tl = gsap.timeline();
          tl.to(heading, {
            y: "0%",
            autoAlpha: 1,
            duration: 0.6,
            ease: "circ.out",
            stagger: { each: 0.055 },
          })
            .to(
              text,
              {
                y: "0%",
                autoAlpha: 1,
                duration: 0.55,
                ease: "circ.out",
                stagger: { each: 0.02 },
              },
              "<55%"
            )
            .to(
              btn,
              {
                y: "0%",
                autoAlpha: 1,
                duration: 0.55,
                ease: "circ.out",
                stagger: { each: 0.035 },
              },
              "<15%"
            );
        },
      });
    });
    ScrollTrigger.create({
      trigger: ".philantrophic_list",
      start: "top 60%",
      end: "top 50%",
      invalidateOnRefresh: true,
      onEnter: () => {
        const tl = gsap.timeline();
        tl.to(
          ".philantrophic_list .sponsors_wrapper",
          {
            autoAlpha: 1,
            duration: 0.8,
            ease: "circ.out",
            stagger: { each: 0.025, from: "random" },
          },
          "<0%"
        );
      },
    });

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
          "<50%"
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

    const peopleSlider = new Swiper(".swiper.people-slider", {
      slidesPerView: 3,
      spaceBetween: 120,
      loop: true,
      freeMode: true,
      pagination: false,
    });

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

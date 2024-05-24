import gsap from "gsap";
import SplitType from "split-type";
import ScrollTrigger from "gsap/ScrollTrigger";

import gradientText from "../utils/gradientText";
import imagesParallax from "../utils/imagesParallax";
import dotsPattern from "../utils/dotsPattern";
import gradientButton from "../utils/gradientButton";
import gradientBg from "../utils/gradientBg";
gsap.registerPlugin(ScrollTrigger);

document.fonts
  .load('1em "Tt Hoves Pro Trial Variable"')
  .then(function () {
    imagesParallax();
    dotsPattern();
    gradientButton();
    gradientBg();

    //Hero
    const navLinks = gsap.utils.toArray(
      ".navbar_link:not(.is-dropdown), .navbar_dd-wrap"
    );

    const splitHeroHeading = new SplitType("h1", {
      types: "lines",
      lineClass: "split-line",
    });
    const splitHeroParagraph = new SplitType(".home-header_content-wrap p", {
      lineClass: "split-line",
    });
    const heroBtns = document.querySelectorAll(
      ".home-header_content-wrap .button-group a"
    );

    gsap.set("h1, .home-header_content-wrap p", {
      autoAlpha: 1,
    });

    const heroTl = gsap.timeline();

    heroTl
      .to(
        splitHeroHeading.lines,
        {
          y: "0%",
          autoAlpha: 1,
          duration: 0.6,
          ease: "circ.out",
          stagger: { each: 0.055 },
        },
        0
      )
      .to(
        splitHeroParagraph.lines,
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
        heroBtns,
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
    //Section Highlights
    const highlights1 = gsap.utils.toArray(
      ".highlights-cms-item:first-child div, .highlights-cms-item:first-child h3, .highlights-cms-item:first-child a"
    );
    const highlights2 = gsap.utils.toArray(
      ".highlights-cms-item:last-child div, .highlights-cms-item:last-child h3, .highlights-cms-item:last-child a"
    );
    ScrollTrigger.create({
      trigger: ".section_highlights-dark",
      start: "top 70%",
      end: "top 50%",
      invalidateOnRefresh: true,
      onEnter: () => {
        const tl = gsap.timeline();
        tl.to(".section_highlights-dark h2", {
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
    ///////Testimonial slider
    const swiperPagination = document.querySelector(".swiper-pagination");
    const swiperParent = document.querySelector(".swiper");
    swiperParent.appendChild(swiperPagination);
    const swiper = new Swiper(".swiper", {
      spaceBetween: 30,
      slidesPerView: 1,
      loop: true,
      speed: 1000,
      draggable: true,
      autoplay: {
        delay: 4500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
    swiper.autoplay.stop();
    ScrollTrigger.create({
      trigger: ".section_testimonial",
      start: "top 50%",
      end: "top 40%",
      invalidateOnRefresh: true,
      onEnter: () => {
        gsap.to(
          ".testimonial_bg-headshot-small, .testimonial_bg-headshot-medium",
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "circ.out",
            stagger: { each: 0.1, from: "random" },
          }
        );
        swiper.autoplay.start();
      },
    });
    ///////Stats
    gradientText(".stats-mission_number.gradient-text");

    const split = new SplitType(".stats-mission_number:not(.gradient-text)", {
      types: "chars",
      charClass: "char",
    });

    const statsContainers = document.querySelectorAll(
      ".stats-mission_component > div"
    );

    statsContainers.forEach((item, i) => {
      const num = item.querySelectorAll(".stats-mission_number .char");
      const descr =
        item.querySelector(".stats-mission_item .bg-gradient-text-clip") ||
        item.querySelector(".stats-mission_item p");

      const tl = gsap.timeline({
        delay: i * 0.05,
        ease: "circ.out",
        scrollTrigger: {
          trigger: ".stats-mission_component",
          start: "top 50%",
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
        );
    });
    /////////2col section
    const split2 = new SplitType(
      "[data-animate='section-h'],[data-animate='section-p']",
      {
        types: "lines",
        lineClass: "split-line",
      }
    );
    ScrollTrigger.create({
      trigger: ".section_layout-2-col",
      start: "top 60%",
      end: "top 50%",
      invalidateOnRefresh: true,
      onEnter: () => {
        const tl = gsap.timeline();
        gsap.set(
          ".section_layout-2-col [data-animate='section-h'], .section_layout-2-col [data-animate='section-p']",
          {
            autoAlpha: 1,
            duration: 0,
          }
        );
        tl.to(".section_layout-2-col [data-animate='section-h'] .split-line", {
          y: "0%",
          autoAlpha: 1,
          duration: 0.6,
          ease: "circ.out",
          stagger: { each: 0.055 },
        })
          .to(
            ".section_layout-2-col [data-animate='section-p'] .split-line",
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
            ".section_layout-2-col [data-animate='section-a']",
            {
              y: "0%",
              autoAlpha: 1,
              duration: 0.55,
              ease: "circ.out",
            },
            "<15%"
          )
          .to(
            ".layout-2-col_image",
            {
              height: "100%",
              duration: 0.8,
              ease: "circ.out",
            },
            0
          );
      },
    });

    //////////News
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
            "<20%"
          );
      },
    });

    /////Sponsors
    const sponsorsSections = document.querySelectorAll(".sponsors_component");
    sponsorsSections.forEach((section) => {
      const heading = section.querySelector("h2");
      const paragraph = section.querySelector("p");
      const buttonWrap = section.querySelector(".button-group");
      const logos = section.querySelectorAll(".sponsors_wrapper");
      const splitH = new SplitType(heading, {
        types: "lines",
        lineClass: "split-line",
      });
      const splitP = new SplitType(paragraph, {
        type: "lines",
        lineClass: "split-line",
      });
      ScrollTrigger.create({
        trigger: section,
        start: "top 60%",
        end: "top 50%",
        invalidateOnRefresh: true,
        onEnter: () => {
          const tl = gsap.timeline();
          tl.to(splitH.lines, {
            y: "0%",
            autoAlpha: 1,
            duration: 0.6,
            ease: "circ.out",
            stagger: { each: 0.055 },
          })
            .to(
              splitP.lines,
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
              buttonWrap,
              {
                y: "0%",
                autoAlpha: 1,
                duration: 0.55,
                ease: "circ.out",
              },
              "<25%"
            )
            .to(
              logos,
              {
                autoAlpha: 1,
                duration: 0.8,
                ease: "circ.out",
                stagger: { each: 0.05, from: "start" },
              },
              "<20%"
            );
        },
      });
    });

    ///////Pre footer CTA section
    ScrollTrigger.create({
      trigger: ".section_cta",
      start: "top 60%",
      end: "top 50%",
      invalidateOnRefresh: true,
      onEnter: () => {
        const tl = gsap.timeline();
        gsap.set(
          ".section_cta [data-animate='section-h'], .section_cta [data-animate='section-p']",
          {
            autoAlpha: 1,
            duration: 0,
          }
        );
        tl.to(".section_cta [data-animate='section-h'] .split-line", {
          y: "0%",
          autoAlpha: 1,
          duration: 0.6,
          ease: "circ.out",
          stagger: { each: 0.055 },
        })
          .to(
            ".section_cta [data-animate='section-p'] .split-line",
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
            ".section_cta [data-animate='section-a']",
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

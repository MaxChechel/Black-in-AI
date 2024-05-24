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

    //Split lines
    const splitLines = new SplitType(
      "h1, .home-header_content-wrap p, [data-animate='section-h'],[data-animate='section-p'],.sponsors_component h2, .sponsors_component p, .section_bai-programs .bai-programs_head-wrap p",
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

    //Hero
    const navLinks = gsap.utils.toArray(
      ".navbar_link:not(.is-dropdown), .navbar_dd-wrap"
    );

    const heroBtns = document.querySelectorAll(
      ".home-header_content-wrap .button-group a"
    );

    gsap.set("h1, .home-header_content-wrap p", {
      autoAlpha: 1,
    });

    const heroTl = gsap.timeline();

    heroTl
      .to(
        ".home-header_content-wrap h1 .split-line",
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
        ".home-header_content-wrap p .split-line",
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
    let swiperChanged = false;

    // Set initial state for all slides except the first one
    swiper.slides.forEach((slide, index) => {
      if (index !== 0) {
        gsap.set(slide, { scale: 0.8, opacity: 0.3 });
      }
    });
    swiper.on("slideChange", function () {
      let currentSlide = swiper.slides[swiper.activeIndex];
      let prevSlide = swiper.slides[swiper.previousIndex];
      console.log(currentSlide);
      console.log(prevSlide);
      // Scale up and increase opacity of current slide
      gsap.to(currentSlide, { scale: 1, opacity: 1 });

      // Apply animation to the specific element in the current slide (example)
      gsap.to(currentSlide.querySelector(".text-is-quote"), {
        // Add your animation properties here
      });

      // Scale down and decrease opacity of previous slide
      if (swiperChanged) {
        gsap.to(prevSlide, { opacity: 0.3, scale: 0.8 });
      }
    });
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
        );
    });
    /////////2col section

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
              duration: 1.4,
              ease: "circ.out",
            },
            0
          );
      },
    });

    /////Work
    ScrollTrigger.create({
      trigger: ".section_bai-programs",
      start: "top 60%",
      end: "top 50%",
      invalidateOnRefresh: true,

      onEnter: () => {
        const tl = gsap.timeline();
        tl.to(".section_bai-programs h2", {
          y: "0%",
          autoAlpha: 1,
          duration: 0.6,
          ease: "circ.out",
        })
          .to(
            ".section_bai-programs .bai-programs_head-wrap p .split-line",
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
            ".work_cms-item",
            {
              autoAlpha: 1,
              marginTop: 0,
              duration: 0.6,
              ease: "circ.out",
              stagger: { each: 0.055 },
            },
            "<20%"
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
            "<30%"
          );
      },
    });

    //Section Events
    const events1 = gsap.utils.toArray(
      ".events-cms-item:first-child .upcoming-event_image, .events-cms-item:first-child .upcoming-event_copy-wrapper > div, .events-cms-item:first-child h3, .events-cms-item:first-child a"
    );
    const events2 = gsap.utils.toArray(
      ".events-cms-item:last-child .upcoming-event_image, .events-cms-item:first-child .upcoming-event_copy-wrapper > div, .events-cms-item:last-child h3, .events-cms-item:last-child a"
    );
    ScrollTrigger.create({
      trigger: ".section_upcoming-events-dark",
      start: "top 70%",
      end: "top 50%",
      invalidateOnRefresh: true,
      onEnter: () => {
        const tl = gsap.timeline();
        tl.to(".section_upcoming-events-dark h2", {
          y: "0%",
          autoAlpha: 1,
          duration: 0.6,
          ease: "circ.out",
        })
          .to(
            ".upcoming-events_content-wrap-header a",
            {
              y: "0%",
              autoAlpha: 1,
              duration: 0.6,
              ease: "circ.out",
            },
            "<10%"
          )
          .to(
            events1,
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
            events2,
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

    /////Sponsors
    const sponsorsSections = document.querySelectorAll(".sponsors_component");
    sponsorsSections.forEach((section) => {
      const heading = section.querySelector("h2 .split-line");
      const paragraph = section.querySelector("p .split-line");
      const buttonWrap = section.querySelector(".button-group");
      const logos = section.querySelectorAll(".sponsors_wrapper");

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
              paragraph,
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
                stagger: { each: 0.025, from: "random" },
              },
              "<0%"
            );
        },
      });
    });

    ///////Pre footer CTA section
    ScrollTrigger.create({
      trigger: ".section_cta",
      start: "top 55%",
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

import gsap from "gsap";
import SplitType from "split-type";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
document.fonts
  .load('1em "DM Sans"')
  .then(function () {
    //Split lines
    const splitLines = new SplitType(
      ".blog_featured-item-content h2, .blog_featured-item-content p, [data-animate] h2, [data-animate] h3",
      {
        types: "lines",
        lineClass: "split-line",
      }
    );

    gsap.set(
      ".blog_featured-item-content h2, .blog_featured-item-content p, [data-animate] h2, [data-animate] h3",
      {
        opacity: 1,
      }
    );
    //////Hero
    const navLinks = gsap.utils.toArray(
      ".navbar_link:not(.is-dropdown), .navbar_dd-wrap"
    );

    const heroTl = gsap.timeline();
    heroTl
      .to("h1", {
        delay: 0.3,
        y: "0%",
        autoAlpha: 1,
        duration: 0.6,
        ease: "circ.out",
      })
      .to(
        ".blog_featured-image",
        {
          scale: 1.04,
          opacity: 1,
        },
        "<25%"
      )
      .to(
        ".blog_category-link",
        { y: "0%", autoAlpha: 1, duration: 0.6 },
        "<25%"
      )
      .to(
        ".blog_featured-item-content h2 .split-line",
        {
          y: "0%",
          autoAlpha: 1,
          duration: 0.6,
          ease: "circ.out",
        },
        "<25%"
      )
      .to(
        ".blog_featured-item-content p .split-line",
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
        ".blog_button-wrapper",
        {
          y: "0%",
          autoAlpha: 1,
          duration: 0.55,
          ease: "circ.out",
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

    ScrollTrigger.create({
      trigger: ".press_cms-container",
      start: "top 60%",
      end: "top 50%",
      invalidateOnRefresh: true,
      onEnter: () => {
        const tl = gsap.timeline();
        tl.to(
          ".grants_checkbox-tag",
          {
            y: "0%",
            autoAlpha: 1,
            duration: 0.55,
            ease: "circ.out",
            stagger: { each: 0.055 },
          },
          "<20%"
        )
          .to(
            ".search_wrapper",
            {
              y: "0%",
              autoAlpha: 1,
              duration: 0.55,
              ease: "circ.out",
            },
            "<20%"
          )
          .to(
            ".press_sort",
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
          );
      },
    });

    ScrollTrigger.create({
      trigger: "[data-animate='faq']",
      start: "top 60%",
      end: "top 50%",
      invalidateOnRefresh: true,
      onEnter: () => {
        const tl = gsap.timeline();
        tl.to("[data-animate='faq'] .split-line", {
          y: "0%",
          autoAlpha: 1,
          duration: 0.6,
          ease: "circ.out",
          stagger: { each: 0.055 },
        }).to(
          ".faq_accordion",
          {
            y: "0%",
            autoAlpha: 1,
            duration: 0.55,
            ease: "circ.out",
            stagger: { each: 0.075 },
          },
          "<50%"
        );
      },
    });
  })
  .catch(function () {
    console.log("Font failed to load");
  });

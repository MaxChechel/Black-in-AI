import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin("ScrollTrigger");
document.fonts
  .load('1em "DM Sans"')
  .then(function () {
    //Split lines
    const splitLines = new SplitType("[data-animate] h2, [data-animate] p", {
      types: "lines",
      lineClass: "split-line",
    });

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
        ".grants-awards_dropdown-filter",
        {
          y: "0%",
          autoAlpha: 1,
          duration: 0.55,
          ease: "circ.out",
        },
        "<20%"
      )
      .to(
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
        ".grants-awards_title, .grants-awards_item",
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
  })
  .catch(function () {
    console.log("Font failed to load");
  });

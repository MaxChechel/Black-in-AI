import gsap from "gsap";
import SplitType from "split-type";
import ScrollTrigger from "gsap/ScrollTrigger";
import gradientButton from "../utils/gradientButton";
import dotsPattern from "../utils/dotsPattern";
gsap.registerPlugin("ScrollTrigger");
document.fonts
  .load('1em "Tt Hoves Pro Trial Variable"')
  .then(function () {
    dotsPattern();
    gradientButton();

    //Split lines
    const splitLines = new SplitType(
      " [data-animate] h2, [data-animate] .our-work_heading-rt p",
      {
        types: "lines",
        lineClass: "split-line",
      }
    );

    gsap.set(" h2,  [data-animate] .our-work_heading-rt", {
      autoAlpha: 1,
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
        ".our-work_container.is-1 h2 .split-line",
        {
          y: "0%",
          autoAlpha: 1,
          duration: 0.6,
          ease: "circ.out",
        },
        "<20%"
      )
      .to(
        ".our-work_container.is-1 .our-work_heading-rt .split-line",
        {
          y: "0%",
          autoAlpha: 1,
          duration: 0.6,
          ease: "circ.out",
        },
        "<50%"
      )
      .to(
        ".our-work_container.is-1 .our-work_content",
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

    const workSections = document.querySelectorAll(
      "[data-animate='work']:not(.our-work_container.is-1)"
    );
    workSections.forEach((section) => {
      const heading = section.querySelectorAll("h2 .split-line");
      const text = section.querySelectorAll(".our-work_heading-rt .split-line");
      const cards = section.querySelectorAll(".our-work_content");
      const imgs = section.querySelectorAll(".our-work_pfp");
      ScrollTrigger.create({
        trigger: section,
        start: "top 60%",
        end: "top 50%",
        invalidateOnRefresh: true,
        onEnter: () => {
          const tl = gsap.timeline();
          tl.to(
            heading,
            {
              y: "0%",
              autoAlpha: 1,
              duration: 0.6,
              ease: "circ.out",
            },
            "<20%"
          )
            .to(
              text,
              {
                y: "0%",
                autoAlpha: 1,
                duration: 0.6,
                ease: "circ.out",
                stagger: { each: 0.02 },
              },
              "<50%"
            )
            .to(
              cards,
              {
                y: "0%",
                autoAlpha: 1,
                duration: 0.55,
                ease: "circ.out",
                stagger: { each: 0.075 },
              },
              "<20%"
            );
        },
      });
    });
  })
  .catch(function () {
    console.log("Font failed to load");
  });

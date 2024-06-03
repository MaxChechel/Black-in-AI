import gsap from "gsap";
import SplitType from "split-type";
import ScrollTrigger from "gsap/ScrollTrigger";
import gradientButton from "../utils/gradientButton";
import dotsPattern from "../utils/dotsPattern";
gsap.registerPlugin("ScrollTrigger");
document.addEventListener("DOMContentLoaded", () => {
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
    .to(".our-work_container.is-1 .work_cms-item", {
      pointerEvents: "all",
      duration: 0,
    })
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
    const items = section.querySelectorAll(".work_cms-item");

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
          )
          .to(items, {
            pointerEvents: "all",
            duration: 0,
          });

        if (section.querySelectorAll(".button-group")) {
          tl.to(section.querySelectorAll(".button-group"), {
            y: "0%",
            autoAlpha: 1,
            duration: 0.55,
            ease: "circ.out",
          });
        }
      },
    });
  });

  //Section Events
  const events1 = gsap.utils.toArray(
    ".events-cms-item:first-child .upcoming-event_image, .events-cms-item:first-child .upcoming-event_copy-wrapper > div, .events-cms-item:first-child h3, .events-cms-item:first-child .highlights-link-black"
  );
  const events2 = gsap.utils.toArray(
    ".events-cms-item:last-child .upcoming-event_image, .events-cms-item:first-child .upcoming-event_copy-wrapper > div, .events-cms-item:last-child h3, .events-cms-item:last-child .highlights-link-black"
  );
  ScrollTrigger.create({
    trigger: ".section_upcoming-events",
    start: "top 70%",
    end: "top 50%",
    invalidateOnRefresh: true,
    onEnter: () => {
      const tl = gsap.timeline();
      tl.to(".section_upcoming-events h2", {
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
});

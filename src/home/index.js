import gsap from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";

import gradientText from "../utils/gradientText";
gsap.registerPlugin(ScrollTrigger, SplitText);
gsap.registerPlugin(SplitText);

export default function gradientText(selector) {
  const childSplit = new SplitText(selector, {
    type: "chars",
    wordsClass: "word",
    charsClass: "char",
  });

  const gradientChars = document.querySelectorAll(
    ".stats-mission_number.gradient-text .char"
  );
  let offset = 0;

  gradientChars.forEach(function (char, i) {
    char.style.backgroundSize = char.parentElement.offsetWidth + "px 100%";

    offset += char.previousElementSibling?.offsetWidth || 0;

    char.style.backgroundPosition =
      char.parentElement.offsetWidth - offset + "px 0%";
  });
}
//Testimonial slider
const swiperPagination = document.querySelector(".swiper-pagination");
const swiperParent = document.querySelector(".swiper");
swiperParent.appendChild(swiperPagination);
const swiper = new Swiper(".swiper", {
  spaceBetween: 30,
  slidesPerView: 1,
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 3000,
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
    gsap.to(".testimonial_bg-headshot-small, .testimonial_bg-headshot-medium", {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      ease: "circ.out",
      stagger: { each: 0.1, from: "random" },
    });
    swiper.autoplay.start();
  },
});

//Stats
//Create gradient text
gradientText(".stats-mission_number.gradient-text");

const statsItems = document.querySelectorAll(".stats-mission_item");
const split = new SplitText(".stats-mission_number:not(.gradient-text)", {
  type: "chars",
  charsClass: "char",
});

statsItems.forEach((item, i) => {
  const num = item.querySelectorAll(".stats-mission_number .char");
  const descr =
    item.querySelector(".stats-mission_item .bg-gradient-text-clip") ||
    item.querySelector(".stats-mission_item p");

  const tl = gsap.timeline({
    //paused: true,
    delay: i * 0.2,
    ease: "circ.out",
    scrollTrigger: {
      trigger: item,
      start: "top 70%",
      end: "top 50%",
      invalidateOnRefresh: true,
    },
  });
  tl.to(num, {
    y: "0%",
    autoAlpha: 1,
    stagger: { each: 0.03 },
  }).to(
    descr,
    {
      y: "0%",
      autoAlpha: 1,
    },
    "<20%"
  );
});

//Section bg gradient
// const bgGradientTl = gsap.timeline({ yoyo: true, repeat: -1 });

// bgGradientTl
//   .to(".section-bg-gradient", {
//     "--bg-gradient-angle": "90deg",
//     duration: 1,
//   })
//   .to(".section-bg-gradient", {
//     "--bg-gradient-angle": "145deg",
//     duration: 1,
//   });

//Hero

const splitHeroHeading = new SplitText("h1", {
  linesClass: "split-line",
});
const splitHeroParagraph = new SplitText(".home-header_content-wrap p", {
  linesClass: "split-line",
});
const heroBtns = document.querySelectorAll(
  ".home-header_content-wrap .button-group a"
);
const heroBg = document.querySelector(".home-header_background-image");
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
      rotateZ: 0,
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
      rotateZ: 0,
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
    ".navbar_component",
    {
      y: "0%",
      autoAlpha: 1,
      duration: 0.55,
      ease: "circ.out",
    },
    "<15%"
  );

//2col section
const split2 = new SplitText(
  "[data-animate='section-h'],[data-animate='section-p']",
  {
    type: "lines",
    linesClass: "split-line",
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
      rotateZ: 0,
      ease: "circ.out",
      stagger: { each: 0.055 },
    })
      .to(
        ".section_layout-2-col [data-animate='section-p'] .split-line",
        {
          y: "0%",
          autoAlpha: 1,
          duration: 0.55,
          rotateZ: 0,
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
          scale: 1.04,
          duration: 1.4,
          ease: "circ.out",
        },
        0
      );
  },
});

//Pre footer CTA section

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
      rotateZ: 0,
      ease: "circ.out",
      stagger: { each: 0.055 },
    })
      .to(
        ".section_cta [data-animate='section-p'] .split-line",
        {
          y: "0%",
          autoAlpha: 1,
          duration: 0.55,
          rotateZ: 0,
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

//Sponsors

const sponsorsSections = document.querySelectorAll(".sponsors_component");

sponsorsSections.forEach((section) => {
  const logos = section.querySelectorAll(".sponsors_wrapper");
  ScrollTrigger.create({
    trigger: section,
    start: "top 60%",
    end: "top 50%",
    invalidateOnRefresh: true,
    onEnter: () => {
      gsap.to(logos, {
        opacity: 1,
        duration: 0.6,
        ease: "circ.out",
        stagger: { each: 0.05, from: "random" },
      });
    },
  });
});

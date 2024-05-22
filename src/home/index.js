import gsap from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";

import gradientText from "../utils/gradientText";
import imagesParallax from "../utils/imagesParallax";
gsap.registerPlugin(ScrollTrigger, SplitText);

imagesParallax();

//Testimonial slider
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

const split = new SplitText(".stats-mission_number:not(.gradient-text)", {
  type: "chars",
  charsClass: "char",
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
    delay: i * 0.1,
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
    stagger: { each: 0.035 },
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

//Section bg gradient
const bgGradientTl = gsap.timeline({ repeat: -1 });
const bgColorChangeTime = 5;
bgGradientTl
  .to(".section-bg-gradient", {
    "--bg-gradient-angle": "0deg",
    duration: 0,
  })
  .to(".section-bg-gradient", {
    "--bg-gradient-angle": "90deg",
    "--bg-gradient-color-1": "#4A247A",
    "--bg-gradient-color-2": "#2F9ECE",
    duration: bgColorChangeTime,
  })
  .to(".section-bg-gradient", {
    "--bg-gradient-angle": "180deg",
    duration: bgColorChangeTime,
  })
  .to(".section-bg-gradient", {
    "--bg-gradient-angle": "270deg",
    "--bg-gradient-color-1": "#48379C",
    "--bg-gradient-color-2": "#2FBBCE",
    duration: bgColorChangeTime,
  })
  .to(".section-bg-gradient", {
    "--bg-gradient-angle": "360deg",
    duration: bgColorChangeTime,
  })
  .to(".section-bg-gradient", {
    "--bg-gradient-angle": "0deg",
    duration: 0,
  });

//Hero
const navLinks = gsap.utils.toArray(
  ".navbar_link:not(.is-dropdown), .navbar_dd-wrap"
);

const splitHeroHeading = new SplitText("h1", {
  linesClass: "split-line",
});
const splitHeroParagraph = new SplitText(".home-header_content-wrap p", {
  linesClass: "split-line",
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

//News
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
        "<50%"
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
        "<50%"
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

//Sponsors

const sponsorsSections = document.querySelectorAll(".sponsors_component");

sponsorsSections.forEach((section) => {
  const heading = section.querySelector("h2");
  const paragraph = section.querySelector("p");
  const buttonWrap = section.querySelector(".button-group");
  const logos = section.querySelectorAll(".sponsors_wrapper");
  const splitH = new SplitText(heading, {
    type: "lines",
    linesClass: "split-line",
  });
  const splitP = new SplitText(paragraph, {
    type: "lines",
    linesClass: "split-line",
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
          "<15%"
        )
        .to(
          buttonWrap,
          {
            y: "0%",
            autoAlpha: 1,
            duration: 0.55,
            ease: "circ.out",
          },
          "<15%"
        )
        .to(
          logos,
          {
            autoAlpha: 1,
            duration: 0.8,
            ease: "circ.out",
            stagger: { each: 0.05, from: "start" },
          },
          "<50%"
        );
    },
  });
});

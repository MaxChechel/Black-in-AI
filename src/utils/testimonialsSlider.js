import gsap from "gsap";
import SplitType from "split-type";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function testimonialSlider() {
  const splitLines = new SplitType(".text-is-quote", {
    types: "lines",
    lineClass: "split-line",
  });

  const swiperPagination = document.querySelector(".swiper-pagination");
  const swiperParent = document.querySelector(".swiper.testimonial-slider");
  swiperParent.appendChild(swiperPagination);
  const swiper = new Swiper(".swiper.testimonial-slider", {
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
    if (index !== swiper.realIndex) {
      gsap.set(slide, { scale: 0.8, opacity: 0.3 });
      gsap.set(slide.querySelectorAll("p"), {
        y: "50%",
        opacity: 0,
      });
    }
  });

  // Ensure the first slide is at its full state on load
  gsap.set(swiper.slides[swiper.realIndex], { scale: 1, opacity: 1 });
  gsap.set(
    swiper.slides[swiper.realIndex].querySelectorAll(
      ".text-is-quote .split-line"
    ),
    { autoAlpha: 1 }
  );
  swiper.on("slideChangeTransitionStart", function () {
    swiperChanged = true;

    let currentSlide = swiper.slides[swiper.activeIndex];
    let prevSlide = swiper.slides[swiper.previousIndex];

    // Create a timeline for the current slide
    let tlCurrent = gsap.timeline();
    tlCurrent.to(currentSlide, { scale: 1, opacity: 1, duration: 1 });
    tlCurrent
      .to(
        currentSlide.querySelectorAll(".text-is-quote .split-line"),
        {
          y: "0%",
          autoAlpha: 1,
          duration: 1,
          ease: "circ.out",
          stagger: { each: 0.075 },
        },
        0.2
      )
      .to(
        currentSlide.querySelectorAll("p"),
        {
          y: "0%",
          autoAlpha: 1,
          duration: 1,
          ease: "circ.out",
          stagger: { each: 0.025 },
        },
        "<20%"
      );

    // Create a timeline for the previous slide
    let tlPrev = gsap.timeline();
    tlPrev.to(prevSlide, { opacity: 0.3, scale: 0.8, duration: 1 });
    tlPrev
      .to(prevSlide.querySelectorAll(".text-is-quote .split-line, p"), {
        opacity: 0,
        duration: 0.4,
      })
      .to(prevSlide.querySelectorAll(".text-is-quote .split-line, p"), {
        y: "50%",
        duration: 0,
      });

    // Apply additional animations if needed for the current slide elements
    gsap.to(currentSlide.querySelector(".text-is-quote"), {
      // Add your animation properties here
    });

    // Scale down and decrease opacity of previous slide
    if (swiperChanged) {
      gsap.to(prevSlide, { opacity: 0.3, scale: 0.8, duration: 1 });
    }
  });

  swiper.on("slideChangeTransitionEnd", function () {
    let currentSlide = swiper.slides[swiper.activeIndex];

    // Apply animation to the specific element in the current slide (example)
    gsap.to(currentSlide.querySelector(".text-is-quote"), {
      // Add your animation properties here
    });
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
}

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function imagesParallax() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.utils.toArray("[data-animate='img-parallax']").forEach((container) => {
    const img = container.querySelector("img");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        scrub: true,
        pin: false,
      },
    });

    tl.fromTo(
      img,
      {
        yPercent: -10,
        ease: "none",
      },
      {
        yPercent: 10,
        ease: "none",
      }
    );
  });
}

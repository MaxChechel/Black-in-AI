import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function dotsPattern() {
  const patterns = document.querySelectorAll(".dots-pattern");

  patterns.forEach((pattern) => {
    const circles = pattern.querySelectorAll("svg circle");

    ScrollTrigger.create({
      trigger: pattern,
      start: "top 60%",
      end: "top 50%",
      invalidateOnRefresh: true,
      onEnter: () => {
        gsap.to(circles, {
          opacity: 1,
          stagger: { each: 0.0015, from: "random" },
        });
      },
    });
  });
}

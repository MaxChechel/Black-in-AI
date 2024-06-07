import gsap from "gsap";
export default function ctaGradientBg() {
  if (document.querySelector(".cta_bg-gradient")) {
    const bgGradientTl = gsap.timeline({ repeat: -1 });
    const bgColorChangeTime = 5;
    bgGradientTl
      .to(".cta_bg-gradient", {
        "--cta-bg-gradient-angle": "0deg",
        duration: 0,
      })
      .to(".cta_bg-gradient", {
        "--cta-bg-gradient-angle": "90deg",
        duration: bgColorChangeTime,
      })
      .to(".cta_bg-gradient", {
        "--cta-bg-gradient-angle": "180deg",
        duration: bgColorChangeTime,
      })
      .to(".cta_bg-gradient", {
        "--cta-bg-gradient-angle": "270deg",
        duration: bgColorChangeTime,
      })
      .to(".cta_bg-gradient", {
        "--cta-bg-gradient-angle": "360deg",
        duration: bgColorChangeTime,
      })
      .to(".cta_bg-gradient", {
        "--cta-bg-gradient-angle": "0deg",
        duration: 0,
      });
  }
}

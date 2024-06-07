import gsap from "gsap";
export default function gradientBg() {
  if (document.querySelector(".section-bg-gradient")) {
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
  }
}

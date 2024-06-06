import gsap from "gsap";
export default function gradientButton() {
  if (document.querySelectorAll(".button.is-gradient")) {
    const gradientBtns = document.querySelectorAll(".button.is-gradient");
    const mm = gsap.matchMedia();

    gradientBtns.forEach((btn) => {
      const circles = btn.querySelectorAll(".btn_circle");
      mm.add("(hover:hover)", () => {
        gsap.set(btn, {
          "--btn-grad-angle": "135deg",
          "--btn-grad-color-1": "#CDF7FD",
          "--btn-grad-color-2": "#63ECFE",
          "--btn-grad-color-3": "#4285D0",
          "--btn-grad-color-4": "#4240BB",
        });
        circles.forEach((circle) => {
          gsap.to(circle, {
            duration: 10,
            repeat: -1,
            yoyo: true,
            scale: 1,
            y: "random(-40,40)",
            x: "random(-40, 40)",
          });
        });
        btn.addEventListener("mouseenter", () => {
          gsap.to(btn, {
            duration: 1,
            ease: "expo.out",
            "--btn-grad-angle": "130deg",
            "--btn-grad-color-1": "#E4E8FB",
            "--btn-grad-color-2": "#69C0FF",
            "--btn-grad-color-3": "#92CBF4",
            "--btn-grad-color-4": "#EAF1F9",
          });
          gsap.to(circles, {
            opacity: 0,
            duration: 1,
          });
        });
        btn.addEventListener("mouseleave", () => {
          gsap.to(btn, {
            duration: 1.6,
            ease: "circ.out",
            "--btn-grad-angle": "135deg",
            "--btn-grad-color-1": "#CDF7FD",
            "--btn-grad-color-2": "#63ECFE",
            "--btn-grad-color-3": "#4285D0",
            "--btn-grad-color-4": "#4240BB",
          });
          gsap.to(circles, {
            opacity: 1,
            duration: 1.6,
          });
        });
      });
    });
  }
}

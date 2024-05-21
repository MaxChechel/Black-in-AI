import gsap from "gsap";
import SplitText from "gsap/SplitText";

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

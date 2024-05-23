import gsap from "gsap";
import SplitType from "split-type";

export default function gradientText(selector) {
  const childSplit = new SplitType(selector, {
    types: "chars",
    wordClass: "word",
    charClass: "char",
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

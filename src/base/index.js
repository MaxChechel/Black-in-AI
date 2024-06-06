import gsap from "gsap";
import SplitType from "split-type";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import dotsPattern from "../utils/dotsPattern";
import gradientButton from "../utils/gradientButton";
import imagesParallax from "../utils/imagesParallax";
import testimonialsSlider from "../utils/testimonialsSlider";

dotsPattern();
gradientButton();
imagesParallax();
testimonialsSlider();

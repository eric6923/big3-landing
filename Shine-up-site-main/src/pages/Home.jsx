import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";
import Workflow from "../components/Workflow";
import Footer from "../components/Footer";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import Team from "../components/Team";
import Videosection from "../components/Videosection";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    // GSAP smooth scrolling effect
    const content = contentRef.current;

    // Multiple factors contribute to smoothness:

    // 1. Animation Duration:
    const animationDuration = 1.2; // Adjust for desired speed (seconds)

    // 2. ScrollTrigger Scrub Amount:
    const scrubAmount = 0.8; // Increase for smoother scrolling (0-1)

    // 3. Animation Easing:
    const ease = "power3.out"; // Experiment with different eases

    // Animate the content on scroll
    gsap.to(content, {
      y: -50, // Adjust scroll distance if needed
      ease,
      duration: animationDuration,
      scrollTrigger: {
        trigger: content,
        start: "top top",
        end: "bottom bottom",
        scrub: scrubAmount,
      },
    });
  }, []);

  return (
    <>
      {/* Smooth Scroll Container */}
      <div ref={contentRef}>
        <Videosection />
        <div className="max-w-7xl mx-auto pt-20 px-6">
          {/* <HeroSection /> */}
          {/* <FeatureSection />
          <Portfolio />
          <Testimonials />
          <Team /> */}
        </div>
      </div>
    </>
  );
};

export default Home;

/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import { AnimatedText, Wrapper, WrapperContent } from "./AnimatedScrollText.styles";

function AnimatedScrollText() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-500px",
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  };

  return (
    <Wrapper ref={slider}>
      <WrapperContent>
        <AnimatedText ref={firstText}>Available for freelance work -</AnimatedText>
        <AnimatedText ref={secondText}>Available for freelance work -</AnimatedText>
      </WrapperContent>
    </Wrapper>
  );
}

export default AnimatedScrollText;

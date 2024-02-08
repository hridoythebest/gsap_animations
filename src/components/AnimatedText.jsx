import React, { useLayoutEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const AnimatedText = () => {
  const component = useRef();
  const text = useRef();
  const txtdiv = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let words = text.current.textContent.split(/\s+/);
      text.current.innerHTML = words
        .map((word) => `<span>${word}</span>`)
        .join(" ");
      let spans = text.current.querySelectorAll("span");
      gsap.set(spans, { autoAlpha: 0 });
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: text.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
      tl.to(spans, { autoAlpha: 1, stagger: 0.2 });
    }, component);
    return () => ctx.revert();
  }, []);
  return (
    <div ref={component} className="md:w-1/2">
      <div ref={txtdiv} className="space-y-5">
        <p className="text-purple-500">Mountains</p>
        <h1 ref={text} className="text-7xl text-white font-semibold">
          Explore The World
        </h1>
        <p className="text-gray-300">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
          suscipit molestiae sit sapiente debitis officia deleniti consectetur
          quas eligendi voluptatum ut esse veritatis assumenda quam, quos iure
          doloremque maiores nulla.
        </p>
        <p className="text-purple-400 underline">read more</p>
      </div>
    </div>
  );
};

export default AnimatedText;

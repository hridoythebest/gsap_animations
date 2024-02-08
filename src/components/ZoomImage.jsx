import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const ZoomImage = ({ src, scale = 4.5, duration = 1, ease = "power2.Out" }) => {
  const imageRef = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        scale: 1 / scale,
        opacity: 0,
        ease: ease,
        duration: duration,
        scrollTrigger: {
          trigger: imageRef.current,
          scrub: 1,
          start: "top 80%",
          end: "bottom 80%",
        },
      });
    }, imageRef);
    return () => ctx.revert();
  });
  return (
    <img
      ref={imageRef}
      src={src}
      alt=""
      className="object-cover p-2 border-4 drop-shadow-2xl"
    />
  );
};

export default ZoomImage;

import React, { useLayoutEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Navbar from "./Navbar";

const Hero = () => {
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const cardRef = useRef(null);
  const component = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        scale: 1.2,
        y: 50,
        ease: "power2.out",
        duration: 3,
        scrollTrigger: {
          trigger: imageRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: "10%",
        },
      });
      gsap.to(".text", {
        y: 600,
        ease: "Powe2.out",
        duration: 3,
        scrollTrigger: {
          trigger: ".text",
          pin: true,
          scrub: 1,
          start: "top top",
          end: "bottom bottom",
        },
      });
      gsap.to(cardRef.current, {
        y: 200,
        x: -1400,
        ease: "Powe2.out",
        duration: 5,
        scrollTrigger: {
          trigger: cardRef.current,
          pin: true,
          scrub: 1,
          start: "top center",
          end: "bottom bottom",
        },
      });
    }, component);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={component}
      className="w-full h-screen bg-[url('/background.svg')] relative"
    >
      <img src="/cloud.svg" alt="" className="absolute top-0 w-full" />
      <Navbar />
      <img
        src="/mountain2.png"
        alt=""
        className="absolute -top-5 w-full object-cover md:object-fill h-screen z-0 "
      />
      <div className="w-full h-[40%] m-auto flex justify-center items-center">
        <h1 className="text text-7xl md:text-[10rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-800 z-10">
          Explore The World
        </h1>
      </div>
      <img
        ref={imageRef}
        src="/mn2.png"
        alt=""
        className="absolute bottom-0 w-full h-[80%] object-cover md:object-fill z-20"
      />
      <div
        ref={cardRef}
        className="w-11/12 md:w-1/3 xl:w-1/4 bg-white/10 absolute bottom-10 right-10 z-50"
      >
        <div className="border border-gray-600 p-5 space-y-5 text-right">
          <h1 className="text-5xl font-bold text-orange-500">01</h1>
          <h1 className="text-4xl font-semibold text-orange-500">Heading</h1>
          <p className="font-light text-gray-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
            suscipit harum vel. Quidem deleniti cum sit error pariatur mollitia
            odit nam. Corporis non, illum aliquam odio necessitatibus tempora
            delectus modi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

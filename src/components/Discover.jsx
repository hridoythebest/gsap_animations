import React, { useLayoutEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const places = [
  {
    image: "image1.svg",
    text: "INDIA",
  },
  {
    image: "image2.svg",
    text: "UAE",
  },
  {
    image: "image3.svg",
    text: "ENGLAND",
  },
  {
    image: "image1.svg",
    text: "SPAIN",
  },
  {
    image: "image2.svg",
    text: "VIETNAM",
  },
  {
    image: "image3.svg",
    text: "JAPAN",
  },
];
const Discover = () => {
  const component = useRef(null);
  const slider = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let places = gsap.utils.toArray(".place");
      gsap.to(places, {
        xPercent: -100 * (places.length - 1),
        ease: "none",
        duration: 5,
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          snap: 1 / (places.length - 1),
          start: "center center",
          end: () => "+=" + slider.current.offsetWidth,
        },
      });
    }, component);
    return () => ctx.revert();
  });
  return (
    <div className="py-[200px]">
      <div className="md:w-1/2 ml-24 space-y-5 text-white">
        <h1 className="text-4xl md:text-7xl font-bold">
          Discover New World In New Way
        </h1>
        <p className="text-sm md:text-base text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
          architecto. Adipisci, quidem explicabo nesciunt laborum laboriosam
          odio velit vel. Perferendis vero deleniti facilis beatae animi et
          exercitationem rem adipisci vitae, accusamus velit dolor officia nihil
          harum doloremque voluptate reiciendis ab?
        </p>
      </div>
      <div ref={component}>
        <div
          ref={slider}
          className="p-4 overflow-x-scroll whitespace-nowrap space-x-10"
        >
          {places &&
            places.map((place) => {
              return (
                <div className="place ml-24 p-2 flex-nowrap w-[400px] h-[500px] border border-gray-600 inline-block relative">
                  <img
                    src={place.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <div className="p-4 text-white object-cover absolute bottom-0">
                    <p>Explore</p>
                    <h1 className="text-2xl font-bold">{place.text}</h1>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Discover;

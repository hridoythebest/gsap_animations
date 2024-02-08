import React from "react";
import ZoomImage from "./ZoomImage";
import AnimatedText from "./AnimatedText";
const Places = () => {
  return (
    <div className="w-4/5 m-auto space-y-20 py-24">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-5 md:space-y-0">
        <AnimatedText />
        <ZoomImage src="./image4.svg" />
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center space-y-5 md:space-y-0">
        <ZoomImage src="./image3.svg" />
        <AnimatedText />
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center space-y-5 md:space-y-0">
        <AnimatedText />
        <ZoomImage src="./image1.svg" />
      </div>
    </div>
  );
};

export default Places;

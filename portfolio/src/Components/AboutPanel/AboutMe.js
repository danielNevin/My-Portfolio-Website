import React from "react";

export default function AboutMe() {

  return (
    <div data-aos="fade-left" data-aos-easing="sine" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true" className="h-auto flex justify-center items-center overflow-x-hidden">
      <div className="h-full flex flex-col items-center justify-start gap-8 font-inter font-medium">
        <p className="text-[#0d0a07] text-md font-light leading-7 text-justify md:text-lg md:leading-8 lg:text-xl lg:leading-8">
          Hi, <span className="font-bold text-primary drop-shadow-xl">I'm Dan</span>, a Mechanical Design Engineer and Front-End Developer based out of Sydney, Australia.
          I have a passion for the creative process of developing visually appealing designs and implementing dynamic, interactive user interfaces.
          As an Engineer, I am addicted to learning new concepts, technologies, and tools that continuously help me level up my skills, sharpen my abilities, and improve my deliverables.
          Outside of Software Development you can find me hitting the gym, drooling over European cars, and enjoying the sights and sounds of Sydney.
        </p>
      </div>
    </div>
  )
}
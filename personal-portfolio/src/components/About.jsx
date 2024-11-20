"use client";

import Heading from "./sub/Heading";
import Achievements from "./sub/Achievements"
import Image from "next/image";
import { aboutData, aboutText, downloadIcon, arrowLeftIcon } from "@/assets";

const About = () => {
  return (
    <div className="min-h-screen px-96 flex flex-col items-center justify-center">
      <Heading text={'About Me'} />
      <div className="w-full flex items-center justify-between md:justify-center">
        <Image src={'/aboutme.png'} alt="About Me picture" width={400} height={400} className="w-[300px] lg:w-[200px] md:hidden" />
        <div>
            <span>Arrow Left</span>
            <p>About text</p>
            <a href="/ResumeH.pdf" download="">
            <span>Download Resume</span>
            <span>Download Icon</span>
            </a>
        </div>
      </div>
    </div>
  );
};

export default About;

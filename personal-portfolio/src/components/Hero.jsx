"use client";
import Image from "next/image";
import { heroIcons } from "@/assets";
import { useMotionValue } from "framer-motion";

const Hero = () => {
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const handleMouseMove = (e) => {
        
    }
  return (
    <div className="h-screen grid place-items-center">
      <div>
        <div className="flex flex-col items-center justify-center gap-y-3 font-light capitalize">
          <div className="flex items-center justify-center">
            <Image
              src={"/person.png"}
              alt="Person Image"
              width={400}
              height={400}
              priority={true}
              className="h-auto w-[150px]"
            />
            <span className="absolute text-3xl font-semibold text-white">Hi</span>
          </div>
          <h1 className="text-center text-3xl font-bold tracking-wider text-gray-500">My Name is Henriette &</h1>
          <p className="text-lg tracking-wider text-gray-700">I Like Design 🥰</p>
        </div>
        <div className="mt-8 flex justify-center gap-x-10 text-3xl text-customPink">
            {heroIcons.map((icon, i) => (
            <a href="#" key={i} className="rounded-lg hover:bg-pink-300 hover:text-black transition-colors">
                {icon}
            </a>
            ))}
        </div>
        <a href="" className="mx-auto mt-7 block w-max rounded-lg bg-customPurple px-3 py-1 font-light capitalize tracking-wider hover:bg-purple-400 transition-colors">Let's Connect</a>
      </div>
    </div>
  );
};

export default Hero;

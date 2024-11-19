"use client";
import Image from "next/image";
import { heroIcons } from "@/assets";
import { useMotionValue, useTransform } from "framer-motion";
import { useState } from "react"

const Hero = () => {
    const [windowOffset, setWindowOffset] = useState({ innerWidth:0, innerHeight: 0 })
    const [onMouseMove, setMouseMove] = useState(false)
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const handleMouseMove = (e) => {
      const {clientX, clientY} = e
      x.set(clientX)
      y.set(clientY)

      console.log(clientX, clientY, x, y)
    }

    const handleMouseEnter = () => {
      setWindowOffset({ innerWidth: window.innerWidth, innerHeight: window.innerHeight })
      setMouseMove(true)

      console.log(innerWidth, innerHeight)
    }

    const { innerWidth, innerHeight } = windowOffset

    const rotatY = useTransform(x, [0, innerWidth], [-30, 30])
    const rotatX = useTransform(y, [0, innerHeight], [10, -50])

  return (
    <div className="h-screen grid place-items-center" onMouseMove={handleMouseMove} onMouseEnter= {handleMouseEnter}>
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

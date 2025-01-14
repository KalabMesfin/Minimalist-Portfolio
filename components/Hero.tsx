import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import { MagicButton } from './ui/MagicButton'
import { FaLocationArrow }  from 'react-icons/fa'

const Hero = () => {
  return (
    <div className="pt-36 pb-20">
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="top-10 left-full h-[80vh] w-[5vw]" fill="purple" />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.3] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
       </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-width-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col justify-center items-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">Dynamic web magic with Next.js</h2>
          <TextGenerateEffect
            className="text-center text-[40] md:text-5xl lg:text-6xl"
            words="Transforming Concepts into Seamless User Experiance."
          />
          <p className="text-center md:tracking-wider mb-5 text-sm md:text-lg lg:text-2xl">Hi, I'am Kalab, A Next.js developer based in Addis Ababa.</p>
          <MagicButton 
            title="Show my works"
            icon={<FaLocationArrow />}
            position="right"
            />
        </div>
      </div>
    </div>
  )
}

export default Hero
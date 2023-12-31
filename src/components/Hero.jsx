import React from 'react';
import { motion } from "framer-motion";
import { styles } from "../style";
import { ComputersCanvas } from './canvas/Computers';

const Hero = () => {
  return (
    <section className='relative w-full mx-auto h-screen'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>{"Hi, I'm ".split("").map(((item)=>
          {
            return <motion.span initial={{x:-10,y:parseInt(Math.random() * 20) % 20}} whileInView={{x:0,y:0}}>{item}</motion.span>
          }))}<span className='text-[#915eff]'>Pratyush </span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 `}>
            I Develop Full Stack Website
          </p>
        </div>
      </div>
      <div className='absolute xs:bottom-10 w-full flex justify-center items-center'>
          <a href='#about'>
            <div className='w-[35px] h-[64px] rounded-3xl border-4 flex justify-center items-start p-2'>
                <motion.div
                animate={{
                  y:[0,24,0]
                }}
                transition={{
                  duration:1.5,
                  repeat:Infinity,
                  repeatType:"loop",
                }}
                className='w-3 h-3 rounded-full bg-secondary'
                >

                </motion.div>
            </div>

          </a>
      </div>
    </section>
  )
}

export default Hero
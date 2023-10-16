import React from 'react';
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { fadeIn, textVariant } from "../utils/motion";
import { services } from "../Constant/constant";
import WrapperComponents from './Hoc/WrapperComponents';

const ServiceCard = ({ index, title, icon }) => {
  console.log('Hey')
  return (<Tilt className="xs:w-[250px] w-full">
    <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className='w-full green-pink-gradient p-1 rounded-[20px] shadow-card'>
      <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col' options={{
        max:45,
        scale:1,
        speed:450,
      }}>
        <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
        <h3 className='font-bold text-center'>{title}</h3>
      </div>
    </motion.div>

  </Tilt>)

}


const About = () => {
  
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>Overview</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className='my-4 text-secondary font-[16px] leading-[30px]'>
        Dedicated and highly motivated Junior Full Stack Developer with a strong foundation in web development, eager to contribute to dynamic projects and continue learning in a collaborative and challenging environment.
      </motion.p>
      <div className='my-20 flex flex-wrap gap-10'>
        {services.map((item, idx) => {
          return <ServiceCard key={item.title} index={idx} {...item} />
        })}

      </div>
    </>
  )
}

export default WrapperComponents(About,"about");
import React from 'react';
import WrapperComponent from "./Hoc/WrapperComponents";
import css from "../assets/tech/css.png";
import html from "../assets/tech/html.png";
import javascript from "../assets/tech/javascript.png";
import reactjs from '../assets/tech/reactjs.png';
import redux from "../assets/tech/redux.png";
import tailwind from "../assets/tech/tailwind.png";
import nodejs from "../assets/tech/nodejs.png";
import mongodb from "../assets/tech/mongodb.png";
import git from "../assets/tech/git.png";
import firebase from "../assets/tech/firebase.png";
import { motion } from "framer-motion"








const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "firebase",
    icon: firebase
  }


];

const Tech = () => {
  return (
    <>
      <motion.h1 initial={{ y: (Math.random() * 100) % 100 }} whileInView={{ y: 0 }} viewport={{ once: false, amount: 0.1 }} className='text-center font-bold font-poppins  my-2 text-5xl'>My <span className='text-violet-400'>Skill's</span> </motion.h1>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((item) => {
          return <motion.div
            initial={{ x: (Math.random()*50) % 50, y: (Math.random()*50) % 50, opacity: 0 }}
            transition={{ delay: 0.2, type: "spring" }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            className='w-28 h-28 ' key={item.name}>
            <img src={item.icon} />
          </motion.div>
        })}
      </div>
    </>
  )
}

export default WrapperComponent(Tech, "")
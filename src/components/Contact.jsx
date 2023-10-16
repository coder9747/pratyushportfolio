import React from 'react';
import leetcode from "../Img/leetcode.png";
import codechef from "../Img/codechef.png";
import {motion} from "framer-motion"

const Contact = () => {
  return (
    <div className=''>
      <h1 className='text-center my-2 text-4xl font-bold'>Coding  Profiles </h1>
      <motion.div 
      initial={{x:-100,opacity:0}}
      whileInView={{x:0,opacity:1}}
      className='flex flex-wrap items-center  justify-evenly my-3'>
        <a className='  ' href={"https://leetcode.com/karnpratyush22/"}><img src={"https://leetcode.com/static/images/LeetCode_logo_rvs.png"} className='h-56 w-56'/></a>
        <a href={"https://www.codechef.com/users/karnpratyush22"}><img src={"https://avatars.githubusercontent.com/u/11960354?v=4"} className='h-56 w-56'/></a>
        
      </motion.div>

    </div>
  )
}

export default Contact
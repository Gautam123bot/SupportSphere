import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div className='w-full py-10 bg- leading-none font-semibold'>
      <div className='text border-t-2 border-b-2 border-zinc-100 flex whitespace-nowrap gap-10'>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition ={{ease: "linear", repeat:Infinity, duration: 5}} className='text-7xl leading-none pt-10 pb-10 font-semibold'>THE HELPING HANDS WHEREVER YOU NEED</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition ={{ease: "linear", repeat:Infinity, duration: 5}} className='text-7xl leading-none pt-10 pb-10 font-semibold'>THE HELPING HANDS WHEREVER YOU NEED</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition ={{ease: "linear", repeat:Infinity, duration: 5}} className='text-7xl leading-none pt-10 pb-10 font-semibold'>THE HELPING HANDS WHEREVER YOU NEED</motion.h1>
      </div>
    </div>
  )
}
export default Marquee

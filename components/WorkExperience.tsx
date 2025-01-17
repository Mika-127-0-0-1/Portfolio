'use client'
import React from 'react'
import { motion } from "framer-motion"
import ExperienceCard from './ExperienceCard'
import { Experience } from '@/typings'

type Props = {
  experiences: Experience[];
}

function WorkExperience({experiences}: Props) {
  return (
    <motion.div
       initial={{opacity: 0,}}
       whileInView={{opacity: 1,}}
       transition={{duration: 1.5}}
       className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly items-center mx-auto">
    <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Experience</h3>

    <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-manditory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#bd4aff]/80'>
        {experiences?.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience}/>

        ))}
        
    </div>
    </motion.div>
  )
}

export default WorkExperience
'use client'
import React from 'react'
import { motion } from "framer-motion"
import { Skill as SkillType} from '@/typings';
import { urlFor } from '@/sanity';

type Props = {
    skill: SkillType;
    directionleft?: boolean;
};

function Skill({skill, directionleft}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img
        initial={{ x: directionleft ? -200 : 200,
            opacity:0,
        }} 
        transition={{ duration: 1}}
        whileInView={{ opacity: 1, x: 0}}
        // viewport={{ once: true}}
        className='rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
        // src="data:image/png;base64,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" 
        src={urlFor(skill?.image).url()}
        alt="" />

        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-3xl text-black opacity-100 font-bold'>{skill?.progress}%</p>
            </div>
        </div>
    </div>
  )
}

export default Skill
'use client'
import React from 'react'
import { motion } from "framer-motion"
import Image from 'next/image'
import { Experience } from '@/typings'
import { urlFor } from '@/sanity'

type Props = {
  experience: Experience;
};

function ExperienceCard({experience}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img 
        initial={{opacity: 0, y: -100}}
        whileInView={{opacity: 1, y:0}}
        transition={{duration: 1.2}}
        viewport={{once: true}}
        // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS7po85M2ltpXWX6fRHmvT7RFGpfXyBbsEFg&s" 
        src={urlFor(experience?.companyImage).url()} 
        alt="" 
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        />
        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>{experience?.jobTitle}</h4>
            <p className='font-bold text-2xl mt-1'>{experience?.company}</p>
            <div className='flex space-x-2 my-2'>
                {/* Tech used */}
                {experience.technologies.map((technology) =>(
                  <img 
                  key={technology._id}
                  // src="data:image/png;base64,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" 
                  src={urlFor(technology?.image).url()}
                  alt="" 
                  className='h-10 w-10 rounded-full'/>

                ))}

            </div>
            <p className='uppercase py-5 text-gray-500 text-lg'>
              {new Date(experience.dateStarted).toDateString()} - {" "}
              {experience.isCurrentlyWorkingHere 
              ? "Present" 
              : new Date(experience.dateEnded).toDateString()}
              </p>

            <ul className='list-disc space-y-4 ml-5 text-lg pr-5 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#bd4aff]'>
                {experience.points.map((point, i) => (
                  <li key={i}>{point}</li>

                ))}
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard
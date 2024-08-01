'use client'
import React from 'react'
import { motion } from "framer-motion"
import { Project } from '@/typings';
import { urlFor } from '@/sanity';


type Props = {
    projects: Project[];
}

function Projects({projects}: Props) {
  return (
    <motion.div 
    initial={{opacity: 0, y: -300}}
    whileInView={{opacity: 1, y: 0}}
    transition={{duration: 1.2}}
    viewport={{ once: true}}
    className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly items-center mx-auto">
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Projects
        </h3> 

        <div className='relitive w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#bd4aff]/80'>
            {projects?.map((project, i) => (
                <div key={project?._id} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                    <img 
                    // src="data:image/jpeg;base64,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" 
                    src={urlFor(project?.image).url()}
                    className=''
                    alt="" />

                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-4xl font-semibold text-center'>
                            <span className='underline decoration-[#bd4aff]/50'>Case Study {i+1} of {projects.length}:</span>{" "} {project?.title}
                        </h4>
                        <div className='flex items-center space-x-2 justify-center'>
                            {project?.technologies.map((technology) => (
                                <img 
                                className='h-7 w-7'
                                key={technology._id}
                                src={urlFor(technology.image).url()}
                                alt=""/>
                            ))}
                        </div>
                        

                        <p className='text-lg text-center md:text-left'>
                            {project?.summary}
                        </p>
                    </div>
                </div>
            ))}
        </div>

        <div className='w-full absolute top-[30%] bg-[#bd4aff]/10 left-0 h-[500px] -skew-y-12'/>
    </motion.div>
  )
}

export default Projects
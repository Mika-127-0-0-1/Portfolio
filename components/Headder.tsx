'use client'
import React, { useEffect, useState } from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from "framer-motion"
import Link from 'next/link'
import { Social } from '@/typings'

type Props = {
  socials: Social[];
};

function Headder({socials}: Props) {
  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])

// function Headder() {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>

      <motion.div 
        initial={{
          x: -500,
          opacity: 0, 
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1, 
          scale: 1,
        }}
        transition={{duration: 1.5,}}
        className='flex flex-row items-center'
      >
        {/* Social Icons */}
        {socials.map((social) => (
          <SocialIcon 
          key={social._id}
          url={social.url} 
          fgColor='grey' 
          bgColor='transparent'
          />
        ))}
      </motion.div>

      {isClient ?  
      <Link href="#contact">
      <motion.div 
        initial={{
          x: 500,
          opacity: 0, 
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1, 
          scale: 1,
        }}
        transition={{duration: 1.5}}
        className='flex flex-row items-center cursor-pointer'
      >
        <SocialIcon
          className='cursor-pointer'
          network='email'
          fgColor='grey'
          bgColor='transparent'
        />
        <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
          Get in touch
        </p>
      </motion.div>
      </Link>
      : <motion.div 
      initial={{
        x: 500,
        opacity: 0, 
        scale: 0.5,
      }}
      animate={{
        x: 0,
        opacity: 1, 
        scale: 1,
      }}
      transition={{duration: 1.5}}
      className='flex flex-row items-center cursor-pointer'
    >
      <SocialIcon
        className='cursor-pointer'
        network='email'
        fgColor='grey'
        bgColor='transparent'
      />
      <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
        Get in touch
      </p>
    </motion.div>}

    </header>
  )
}

export default Headder;
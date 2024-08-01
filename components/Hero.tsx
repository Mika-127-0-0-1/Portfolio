'use client'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import Link from 'next/link';
import { PageInfo } from '@/typings';
import { urlFor } from '@/sanity';

type Props = {
    pageInfo: PageInfo
};

function Hero({pageInfo}: Props) {
// function Hero() {
    const [text, count] = useTypewriter({
        words: [
            `Hi, the name's ${pageInfo?.name}`,
            "Guy-who-loves-coffee.tsx", "<ButLovesCodingMore/>"],
        loop: true,
        delaySpeed: 2000,
    });
    
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <img className='relative rounded-full h-32 w-32 mx-auto object-cover' 
        // src='https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg' 
        src={urlFor(pageInfo?.heroImage).url()} 
        alt=''/>
        <div className='z-20'>
            <h2 className='uppercase text-sm pb-2 tracking-[15px] text-gray-500'>
                {pageInfo?.role}
            </h2>
            <h1 className='text-4xl xl:text-6xl font-semibold px-10'>
                <span className='mr-3'>{text}</span>
                <Cursor cursorColor='#bd4aff'/>
            </h1>

            <div className='pt-5 '>
                <Link href="#about">
                    <button className='heroBtnClass'>About</button>
                </Link>
                <Link href="#workexperience">
                    <button className='heroBtnClass'>Experience</button>
                </Link>
                <Link href="#skills">
                    <button className='heroBtnClass'>Skills</button>
                </Link>
                <Link href="#projects">
                    <button className='heroBtnClass'>Projects</button>
                </Link>
            </div>
        </div>
        
    </div>
  )
}

export default Hero
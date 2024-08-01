'use client'
import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {}
type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
  };

function ContactMe({}: Props) {
    const { register, handleSubmit} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:mika.sidwell@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
    };
  return (
    <div
    className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly items-center mx-auto">
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Contact
        </h3>

        <div className='flex flex-col space-y-10'>
            <h4 className='text-4xl font-semibold text-center'>
                I have got just what you need. {" "}
                <span className='decoration-[#bd4aff]/50 underline'>Lets Talk.</span>
            </h4>

            <div>
                <div className='flex items-center space-x-5 justify-center'>
                    <PhoneIcon className='text-[#bd4aff] h-7 w-7 animate-pulse'/>
                    <p className='text-xl'>+27 69 489 1873</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className='text-[#bd4aff] h-7 w-7 animate-pulse'/>
                    <p className='text-xl'>mika.sidwell@gmail.com</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                    <MapPinIcon className='text-[#bd4aff] h-7 w-7 animate-pulse'/>
                    <p className='text-xl'>123 Developer Lane</p>
                </div>
            </div>
            
            <form onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col space-y-2 w-fit mx-auto'>
                <div className='flex space-x-2'>
                    <input {...register('name')} placeholder='Name' className='contactInput' type="text" />
                    <input {...register('email')} placeholder='Email' className='contactInput' type="email" />
                </div>

                <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />

                <textarea {...register('message')} placeholder='Message' className='contactInput'></textarea>
                <button type='submit' className='bg-[#bd4aff] py-5 px-10 rounded-md text-black font-bold text-lg '>Submit</button>
            </form>
        </div>        
    </div>
  )
}

export default ContactMe
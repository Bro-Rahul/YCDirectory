import React from 'react'
import Image from 'next/image'
import { Input } from '../ui/input'
import icons from '@/constants/icons'

const HeroSection = () => {
    return (
        <section className='hero-1'>
            <p
                className='bg-[#FBE843] px-5 py-2 rounded '>
                <span className='font-extrabold text-sm'>
                    PITCH, VOTE, AND GROW
                </span>
            </p>
            <p
                className='bg-black text-white font-[900] px-5 py-3 uppercase text-4xl text-center'
            >
                <span>Pitch your startup,<br /> connect with entrepreneurs</span>
            </p>
            <p className='font-semibold text-white '>Submit ideas, Vote on Pitches,and Get Noticed in visual Competitions</p>
            <div className='grid grid-cols-[1fr_40px] place-items-center bg-white rounded-full border-4 border-black p-2 w-1/3'>
                <Input
                    placeholder='Search Startup'
                    className='p-5 placeholder:uppercase placeholder:text-xl outline-none placeholder:font-extrabold placeholder:text-black font-extrabold text-2xl'
                />
                <p className='bg-black rounded-full p-2 cursor-pointer'>
                    <Image
                        src={icons.searchIcon}
                        alt='search'
                        width={45}
                        height={45}
                        priority
                    />
                </p>
            </div>
        </section>
    )
}

export default HeroSection
import React from 'react'
import Image from 'next/image'
import icons from '@/constants/icons'
import image from '@/constants/image'
import { Button } from '../ui/button'

const StartUpCard = () => {
    return (
        <div className='card group'>
            <div className='flex w-full justify-between'>
                <p className='bg-[#FFE8F0] font-semibold text-sm text-center p-3 rounded-full group-hover:bg-white transition-all'>20 May 2023</p>
                <div className='flex items-center gap-1'>
                    <Image
                        alt='views-icons'
                        src={icons.eyeIcon}
                        width={17}
                        height={17}
                        priority
                    />
                    <span className='font-semibold'>232</span>
                </div>
            </div>
            <div className='flex justify-between items-center'>
                <div>
                    <p className='font-normal text-lg'>Staven Smith </p>
                    <p className='font-extrabold text-2xl '>EcoTrack </p>
                </div>
                <Image
                    src={icons.profileIcon}
                    alt='profile-icons'
                    height={50}
                    width={50}
                />
            </div>
            <p className='line-clamp-2 w-full'>Lorem ipsum dolor, sit amet consectetur elit. A, quaerat quia! Veniam consequatur, iste voluptates mollitia dolorum pariatur at dolor quibusdam architecto quasi quod fuga nostrum aperiam quaerat minima. In.</p>
            <Image
                src={image.placeHolderImage}
                alt='place-holder'
                className='w-full h-45 object-cover'
            />
            <div className='flex justify-between'>
                <p>Senior Level </p>
                <Button className='rounded-full cursor-pointer'>Details</Button>
            </div>
        </div>
    )
}

export default StartUpCard
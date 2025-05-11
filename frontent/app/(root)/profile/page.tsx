import React from 'react'
import Image from 'next/image'
import icons from '@/constants/icons'
import StartUpCard from '@/components/utils/StartUpCard'

const ProfilePage = () => {
  return (
    <main className='grid grid-cols-[275px_1fr] p-5 gap-5'>
        <Profile/>
        <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {[1,2,3,4,5,6,7,8].map(item=><StartUpCard key={item}/>)}
        </div>
    </main>
  )
}

export default ProfilePage

const Profile = ()=>{
    return (
        <div className='flex flex-col w-full h-fit items-center p-8 border-b-8 border-t-4 border-r-6 border-l-4 bg-[#EE2B69] border-black rounded-3xl relative'>
            <p className='absolute -top-5 w-[90%] rounded-2xl border-black text-center bg-white border-2 p-2 font-extrabold '>
                NATHAN SMITH
            </p>
            <Image
                src={icons.profileIcon}
                alt='profile-picture'
                width={200}
                height={200}
                className='rounded-full border-2 p-1 bg-white border-black'
            />
            <div className='flex flex-col gap-2 items-center text-white'>
                <h2 className='font-extrabold text-xl'>@nathansmith</h2>
                <p className='text-sm'>Nextjs Enthusiast & Educator</p>
            </div>
        </div>
    )
}
import React from 'react'

const Hero2: React.FC<{
}> = () => {
  return (
    <div className='flex flex-col gap-2 w-full'>
      <div className='hero-1'>
        <p
          className='bg-[#FBE843] px-5 py-2 rounded '>
          <span className='font-extrabold text-sm uppercase'>
            October 5,2024
          </span>
        </p>
        <p
          className='bg-black text-white font-[900] px-5 py-3 uppercase text-4xl text-center'
          >
          <span>JSM academy masterclass</span>
        </p>
        <p className='font-semibold text-wrap text-center w-full lg:w-1/3 min-md:w-full sm:w-full text-white '>Submit ideas Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit labore maxime optio exercitationem sit, itaque tenetur adipisci vero perferendis, reiciendis consequatur, odio laudantium necessitatibus sequi illum. Aut natus eius sed!, Vote on Pitches,and Get Noticed in visual Competitions</p>
      </div>
    </div>
  )
}

export default Hero2
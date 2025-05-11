import React from 'react'
import StartUpCard from '../utils/StartUpCard'

const RecommendedStartups = () => {
  return (
    <div className='flex flex-col w-full px-10 gap-5 mt-5'>
      <h1 className='font-extrabold text-xl inline-block'>Recommended Startups</h1>
      <section className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5'>
        {[1, 2, 3, 4, 5, 6, 7, 8].map(item => <StartUpCard key={item} />)}
      </section>
    </div>
  )
}

export default RecommendedStartups


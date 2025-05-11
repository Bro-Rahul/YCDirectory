import React from 'react'

const CreateStartUpLayout: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <div className='flex flex-col h-full w-full'>
      <div className='hero-1'>
        <p
          className='bg-black text-white font-[900] px-5 py-3 uppercase text-4xl text-center'>
          <span>Submit your Startup Pitch</span>
        </p>
      </div>
      {children}
    </div>
  )
}

export default CreateStartUpLayout
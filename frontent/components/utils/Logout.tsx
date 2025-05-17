"use client"
import React from 'react'
import { signOut } from 'next-auth/react'
import { Button } from '../ui/button'

const Logout = () => {

  return (
    <Button
      className='bg-transparent text-[#EE2B69] p-5 font-bold text-lg cursor-pointer hover:bg-[#EE2B69]/10'
      onClick={e => signOut()}
    >
      Logout
    </Button>
  )
}

export default Logout
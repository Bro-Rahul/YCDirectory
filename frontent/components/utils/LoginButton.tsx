"use client"
import React from 'react'
import { Button } from '../ui/button'
import { signIn } from 'next-auth/react'

const LoginButton = () => {

  return (
    <Button
      onClick={e => signIn("github",{
        redirect : true,
        callbackUrl : "/"
      })}
    >
      Login
    </Button>
  )
}

export default LoginButton
"use client"
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'
import MDEditor from "@uiw/react-md-editor"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import icons from '@/constants/icons'


const CreateStartUps = () => {
  return (
    <form
      className='flex flex-col items-center gap-5 mt-15 pb-[80px] w-full mx-auto xl:w-[50%] lg:w-[50%] md:w-[50%] px-5'
    >
      <p className='flex flex-col gap-3 w-full'>
        <label
          htmlFor="title"
          className='font-extrabold'
        >Title</label>
        <Input
          id='title'
          placeholder='Enter the TItle '
          className='flex w-full border-3 border-black px-4 py-6 font-bold rounded-full'
        />
      </p>
      <p className='flex flex-col gap-3 w-full'>
        <label
          htmlFor="Description"
          className='font-extrabold'
        >Description</label>
        <Textarea
          id='Description'
          placeholder='Enter the Description '
          className='flex w-full border-3 border-black px-4 py-6 font-bold rounded-xl h-35 overflow-y-scroll'
        />
      </p>
      <p className='flex flex-col gap-3 w-full'>
        <label
          htmlFor="Category"
          className='font-extrabold'
        >Category</label>
        <Input
          id='Category'
          placeholder='Choose a Category (e.g.. Tech,Education,etc)'
          className='flex w-full border-3 border-black px-4 py-6 font-bold rounded-full'
        />
      </p>

      <p className='flex flex-col gap-3 w-full'>
        <label
          htmlFor="Image"
          className='font-extrabold'
        >Image link</label>
        <Input
          id='Image'
          placeholder='Past a link to your demo or promotional media '
          className='flex w-full border-3 border-black px-4 py-6 font-bold rounded-full'
        />
      </p>

      <div data-color-mode="light" className='flex flex-col gap-3 w-full'>
        <label
          htmlFor="pitch"
          className='font-extrabold'
        >Pitch Details</label>
        <MDEditor
          height={300}
          prefix='edit'
          style={{
            overflow:"hidden"
          }}
          textareaProps={{
            placeholder : "Briefly describe your idea and what problem it's solves"
          }}
          value=''
        />
      </div>
      <Button className='w-full mt-5 bg-[#EE2B69] p-3 py-5 rounded-full font-extrabold text-md hover:bg-[#EE2B69]/85 cursor-pointer'>
      Submit Your Pitch 
        <Image
        alt='submit-btn'
        src={icons.submitIcon}
        width={12}
        height={12}
        priority
        />
      </Button>
    </form>
  )
}

export default CreateStartUps
"use client"
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React, { useActionState, useState } from 'react'
import MDEditor from "@uiw/react-md-editor"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import icons from '@/constants/icons'
import { submitTasksAction } from '@/lib/actions'


const CreateStartUps = () => {
  const [pitch, setPitch] = useState<string>('');

  // Integrating useActionState
  const [state, formAction, isPending] = useActionState(submitTasksAction, {
    category: '',
    description: '',
    link: '',
    pitch,
    title: '',
  });

  return (
    <form
      action={formAction}
      className='flex flex-col items-center gap-5 mt-15 pb-[80px] w-full mx-auto xl:w-[50%] lg:w-[50%] md:w-[50%] px-5'
    >
      <p className='flex flex-col gap-3 w-full'>
        <label
          htmlFor="title"
          className='font-extrabold'
        >Title</label>
        <Input
          id='title'
          name='title'
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
          name='description'
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
          name='category'
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
          name='link'
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
            overflow: "hidden"
          }}
          textareaProps={{
            name: 'pitch',
            placeholder: "Briefly describe your idea and what problem it's solves"
          }}
          value={pitch}
          onChange={e => setPitch(e!)}
        />
      </div>
      <Button
        className={`w-full mt-5 bg-[#EE2B69] p-3 py-5 rounded-full font-extrabold text-md 
          ${isPending ? 'opacity-50' : 'hover:bg-[#EE2B69]/85'} cursor-pointer`}
        disabled={isPending}
      >
        {isPending ? 'Submitting...' : 'Submit Your Pitch'}
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
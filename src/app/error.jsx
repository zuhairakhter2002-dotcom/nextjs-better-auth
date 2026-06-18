'use client'
import { Button } from '@/components/ui/button'
import React from 'react'

function error({error,reset}) {
  return (
    <div>
      <div className='h-screen flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center gap-6'>
            <h1 className='text-2xl font-bold '> Something went wrong!</h1>
            <p className='text-red-500'>{error.message}</p>
            <Button onClick={()=>reset()}>Try again</Button>
        </div>

      </div>
    </div>
  )
}

export default error

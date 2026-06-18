import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

function NotFound() {
  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='flex flex-col justify-center items-center gap-7  '>
        <h2 className='text-2xl md:text-4xl'>404</h2>
        <h3 className='text-xl md:text-2xl'>
            Page Not Found 
        </h3>
        <Button>  <Link href={'/'}>Home</Link></Button>
       
      </div>
    </div>
  )
}

export default NotFound

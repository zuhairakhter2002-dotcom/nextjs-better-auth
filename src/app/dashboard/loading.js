import React from 'react'
import { Spinner } from '@/components/ui/spinner'
 
export default function Loading() {
  return (
    <div>
        <div className="h-screen flex items-center justify-center">
            <div> <Spinner className={'w-20 h-20'} /></div>
                      
                   </div>
    </div>
  )
}



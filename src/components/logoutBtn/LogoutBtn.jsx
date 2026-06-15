'use client'
import React from 'react'
import { authClient } from '@/lib/client-auth'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'

function LogoutBtn() {
    const router = useRouter()
    const logbtn = async ()=>{
        await authClient.signOut()
        router.push('/singin')

    }
  return (
    <div>
      <Button onClick={logbtn}>Logout</Button>
    </div>
  )
}

export default LogoutBtn

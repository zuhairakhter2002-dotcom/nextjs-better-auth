'use client'
import React, { useState } from 'react'
import { authClient } from '@/lib/client-auth'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'
import LoadingBtn from '../ui/LoadingBtn'
import { useLoading } from '@/hooks/useLoading'

function LogoutBtn() {
  const {loading ,execute} = useLoading()
  // const [provider ,setprovider] = useState('')
    const router = useRouter()
    const logbtn = async ()=>{
      // setprovider('logout')
      await execute(async()=>{
          await authClient.signOut()
           router.push('/singin')
      })
      

    }
  return (
    <div>
      <LoadingBtn loading={loading} loadingvalue={'Logout...'}  onClick={logbtn}>Logout</LoadingBtn>
   
    </div>
  )
}

export default LogoutBtn

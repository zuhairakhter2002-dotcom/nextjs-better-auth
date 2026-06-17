import LogoutBtn from "@/components/logoutBtn/LogoutBtn";
import { auth } from "@/lib/auth";;
import { headers } from "next/headers";
import Image from "next/image";
import { redirect } from "next/navigation";

import React from 'react'

async function Page() {

  await new Promise((resolve) =>
    setTimeout(resolve, 3000)    // for custom wait
  )
  const session = await auth.api.getSession({
    headers: await headers()
  })
  console.log('this is dashboard', session);
  console.log(session?.user.emailVerified);


  if (!session) {
    redirect('/')
  }
  if (!session.user.emailVerified) {
    redirect("/verify-email");
  }
  return (
    <div>
      <div className="w-full h-screen flex justify-center items-center bg-black">
        <div className="p-10 bg-white text-gray-800 rounded-2xl shadow-[0px_0px_13px_0px_#fafafa] ">
          <div>         
          <h1 className="text-4xl font-bold mb-5">
             Welcome To Authentication Dashboard
          </h1>
          <div className="flex justify-between items-start">
          <Image className="rounded-2xl" src={session?.user?.image || '/file.svg'} alt="user image" width={200} loading="eager" height={200} />
          <div className="grid gap-7 mt-10">
            <h2 className="text-2xl">
               Welcome <strong>
                       {session?.user?.name}  
                </strong>   
            </h2>
            <h3 className="text-xl">
               Email:
               <strong>{session?.user?.email}</strong>
              </h3>
          </div>
        </div>
        </div>
        <div className="text-center"><LogoutBtn /></div>
        
      </div>
       </div>
    </div>
  )
}

export default Page

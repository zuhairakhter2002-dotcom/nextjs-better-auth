import LogoutBtn from "@/components/logoutBtn/LogoutBtn";
import { auth } from "@/lib/auth";import { error } from "better-auth/api";
import { headers } from "next/headers";
import { User } from "lucide-react";
import Image from "next/image";
import { redirect } from "next/navigation";

import React from 'react'

async function Page() {
//  throw new Error("Server crashed")

  await new Promise((resolve) =>
    setTimeout(resolve, 1000)    // for custom wait
  )
  const session = await auth.api.getSession({
    headers: await headers()
  })
  // console.log('this is dashboard', session);
  // console.log(session?.user.emailVerified);
// console.log('this is image',session.user.image);
// console.log("SESSION =>", session)
// console.log("EMAIL VERIFIED =>", session?.user?.emailVerified)

  if (!session) {
    redirect('/')
  }
  if (!session.user.emailVerified) {
    redirect("/verify-email");
  }
  const username = session?.user?.name.split(' ')
  // console.log(username);
  
  return (
    <div>
      <div className="w-full h-screen flex justify-center items-center bg-transparent">
        <div className="p-10  text-gray-800 rounded-2xl shadow-[0px_0px_13px_0px_#fafafa] bg-white/10 backdrop-blur-md border border-white/20 ">
          <div>   
            <div className="flex justify-between items-baseline">
                <h2 className="text-3xl md:text-4xl text-center font-bold mb-5 text-gray-200 ">
             Welcome  back {username[0]}</h2>
              <div className="text-center  hidden md:flex relative -top-2.5 right-0"><LogoutBtn /></div>
              </div>      
        
          <div className="flex flex-col md:flex-row tify-between items-center md:items-start md:gap-10">
            {session?.user?.image ?   <Image className="rounded-full border-4 border-purple-400" src={session?.user?.image} alt="user image" width={250} loading="eager" height={250}   unoptimized /> : <User className="w-50 h-50 text-gray-200"/>}
        
          <div className="grid gap-3 mt-10">
            <h2 className="text-[15px]  md:text-2xl text-gray-200">
               Name : <strong>{ session?.user?.name}  </strong>   
            </h2>
            <h3 className="text-[15px] md:text-xl text-gray-200">
              Email :
               <strong>{ session?.user?.email}</strong>
              </h3>
             
            <h3 className="text-[15px]  md:text-xl text-gray-200">
               EmailVerify :
               <strong> { session?.user?.emailVerified?'True':'False'}</strong>
              </h3>
            <h3 className="text-[15px] md:text-xl text-gray-200">
               Role :
               <strong> { session?.user?.role}</strong>
              </h3>
          </div>
        </div>
        </div>
        <div className="text-center md:hidden mt-10"><LogoutBtn /></div>
        
      </div>
       </div>
    </div>
  )
}

export default Page

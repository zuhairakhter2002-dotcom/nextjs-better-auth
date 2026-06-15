'use client'
import { useState } from "react";
import { authClient } from "@/lib/client-auth";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Page(){
    const [email,setemail]= useState('')
    const [message,setmessage] = useState ('')

    const handleBtn = async (e) =>{
        e.preventDefault()
        console.log('btn');
        
        const {data,error} = await  authClient.requestPasswordReset({
            email,
            redirectTo:'http://localhost:3000/reset-password'
        })
        console.log('this for forget page',data,'or',error);
        
        if(error){
            setmessage(error.message)
            console.log(error)
            return
        }
        setmessage('Reset link send to your email')
    }
   return(
    <>

       <div className=" h-screen bg-black w-full flex items-center justify-center gap-4">
        <div className="w-full max-w-sm bg-white rounded-2xl shadow-[0px_0px_13px_0px_#fafafa]  p-7">
        <div>
            <h2 className="my-4 text-xl">
                Enter Your Email
            </h2>
        </div>
           <div >
             <form className="grid gap-4"
             onSubmit={handleBtn}>
                 <div>
                    <label htmlFor="Email"></label>
                    <Input className={'bg-blue-100'} value={email} id={'email'} type={'email'} placeholder={'Enter your email'} onChange={(e)=>setemail(e.target.value)}/>
                 </div>
                 <div>
                    <Button type={'submit'}>Send Link</Button>
                 </div>
             </form>
           </div>
            <p className="my-2 text-[16px] text-red-500">{message}</p>
            </div>
       </div>
    </>
   ) 
}
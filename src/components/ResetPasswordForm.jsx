'use client'
import { Eye, EyeOff } from "lucide-react";
import { useState,useEffect, useLayoutEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { authClient } from "@/lib/client-auth";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useLoading } from "@/hooks/useLoading";
import LoadingBtn from "@/components/ui/LoadingBtn";




function ResetPasswordForm() {
    const [password,setpassword]=useState('')
    const [confirmPassword,setconfirmPassword] = useState('')
    const [show,setshow]= useState({
         password: false,
         confirmPassword: false,
    })
    const [error, seterror] = useState('')
    const [success, setsuccess] = useState('')
    const router = useRouter()
    const searchParams = useSearchParams()
    const token = searchParams.get('token')
    const {loading,execute} = useLoading()
    // console.log('token',token);
    

     useEffect(() => {
    if (!token) {
      router.push('/')
    }
  }, [token, router])
    
    const handleBtn = async (e) =>{
         e.preventDefault()

         if(password!==confirmPassword){
            seterror("Password and Confirm Password must be same");
            return
         }
        
        
        if(!token){
            seterror('invalid resrt link')
            await new Promise((res)=>setTimeout( res, 1000))
            router.push('/')
            return
        }
         await execute( async()=>{
            const {data,error} = await authClient.resetPassword({
            newPassword:password,
            token
        })
        if(error){
            seterror(error.message)
            return
        }
        setsuccess('Password reset successfully')
        setTimeout(() => {
            router.push('/singin')
        },500);
         })
      
    }
  return (
    <div>
       <div className="flex justify-center h-screen items-center bg-black ">
        <div className="w-full max-w-sm bg-white  rounded-2xl shadow-[0px_0px_13px_0px_#fafafa]  p-7">
            <div>
                <h2 className="my-4 text-xl">
                    Reset Your Password
                </h2>
            </div>
           <form className="grid gap-4"
           onSubmit={handleBtn}>
               <div className="flex flex-col gap-3">
                 <Label htmlFor={'password'}>Password</Label>
                 <div className="relative">
                 <Input className={'bg-blue-100'} value={password} type={show.password ? 'text' :'password'} id={'password'} required onChange={(e)=>setpassword(e.target.value)}/>
                 <button className={'absolute right-3 top-1/2 -translate-y-1/2 bg-transparent'} type={'button'} onClick={()=>setshow({...show,password:!show.password})}>{show.password ?<EyeOff/> : <Eye/>}</button>
               </div>
               </div>
               <div  className="flex flex-col gap-3">
                 <Label htmlFor={'confirm-password'}>Confirm Password</Label>
                 <div className="relative">
                 <Input className={'bg-blue-100'} value={confirmPassword} type={show.confirmPassword ? 'text ':'password'} id={'confirm-password'} required onChange={(e)=>setconfirmPassword(e.target.value)}/>
                 <button className={'absolute right-3 top-1/2 -translate-y-1/2 bg-transparent'} type={'button'} onClick={()=>setshow({...show,confirmPassword:!show.confirmPassword})} >{show.confirmPassword ? <EyeOff/>:<Eye/>}</button>
               </div>
               </div>
               <LoadingBtn disabled={loading} loadingvalue={"Changing Password..."} type={'submit'} className={'w-full'}>Change Password</LoadingBtn>
               
           </form>
          {error && <p className="my-2 text-red-500">{error}</p> } 
          {success && <p className="my-2 text-green-500">{success}</p> } 
       </div>
       </div>
    </div>
  )
}

export default ResetPasswordForm

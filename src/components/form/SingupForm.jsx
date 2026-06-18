'use client'
import { Eye, EyeOff } from "lucide-react";
import React, { useState } from 'react'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Button, buttonVariants } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import Link from 'next/link'
import { authClient } from '@/lib/client-auth'
import { useRouter } from 'next/navigation'
import { useLoading } from "@/hooks/useLoading";
import LoadingBtn from "../ui/LoadingBtn";
function SingupForm() {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [name, setname] = useState('')
    const [error, seterror] = useState('')
    const [success, setsuccess] = useState('')
    const [show, setshow] = useState(false)
    const [provider, setprovider] = useState('')
    const { loading, execute } = useLoading()
    const router = useRouter()

    const onsubmitbtn = async (e) => {
        e.preventDefault()
        setprovider('singup')
        await execute(async () => {
            const { data, error } = await authClient.signUp.email({
                email, password, name
            })

            if (error) {
                // console.log(error);
                seterror(error.message)
                setprovider(null)
                return
            } else {
                // console.log('data', data);
                setsuccess('account create succsesfully')
                setprovider(null)


            }
            setname('')
            setemail('')
            setpassword('')

        })

    }
    const handlegooglelogin = async () => {
        setprovider('google')
        await execute(async()=>{
                try {
            await authClient.signIn.social({
                provider: 'google',
                callbackURL: '/dashboard'
            })
        } catch (error) {
            // console.log('google error :', error.message)
            setmessage(error?.message || "Something went wrong")

        }
        })
       
    }
    const handlegithublgin = async () => {
        setprovider('github')
        await execute(async()=>{
             try {
            await authClient.signIn.social({
                provider: 'github',
                callbackURL: '/dashboard'
            })
        } catch (error) {
            // console.log('github error:', error.message);
            setmessage(error?.message || "Something went wrong")

        }
        })
       
    }
    return (
        <div className='w-full h-screen flex justify-center items-center bg-black'>
            <Card className={'w-full max-w-sm shadow-[0px_0px_13px_0px_#fafafa]'}>
                <CardHeader>
                    <CardTitle>
                        Sing Up Your Account
                    </CardTitle>
                    <CardDescription>
                        Enter your name details
                    </CardDescription>
                    <CardAction>
                        <span>Alredy have an account</span>
                        <Button variant='link' asChild><Link href='/singin'>Sing In</Link></Button>
                    </CardAction>
                </CardHeader>
                <CardContent>
                    <form  >
                        <div className='flex flex-col gap-6'>
                            <div className='grid gap-2'>
                                <Label htmlFor="name">Name</Label>
                                <Input className={'bg-blue-100'} type={'text'} placeholder={'Enter Your Name'} id={'name'} value={name} required onChange={(e) => setname(e.target.value)} />
                            </div>
                            <div className='grid gap-2'>
                                <Label htmlFor="email">Email</Label>
                                <Input className={'bg-blue-100'} type={'email'} placeholder={'Enter Your Email'} id={'email'} value={email} required onChange={(e) => setemail(e.target.value)} />
                            </div>
                            <div className='grid gap-2'>
                                <Label htmlFor='password'>Password</Label>
                                <div className="relative">
                                    <Input className={'bg-blue-100'} type={show ? 'text' : 'password'} placeholder={'Enter Your Password'} id={'password'} value={password} required onChange={(e) => setpassword(e.target.value)} />
                                    <button className={'absolute right-3 top-1/2 -translate-y-1/2 bg-transparent'} type={'button'} onClick={() => setshow(!show)}>{show ? <EyeOff /> : <Eye />}</button>
                                </div>
                            </div>
                            <p className='text-red-600 mt-2'>{error}</p>
                            <p className='text-green-600 mt-2'>{success}</p>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className={'flex flex-col gap-2'}>
                     <LoadingBtn loading={provider==='singup'} loadingvalue={"Sing Up..."} type={'submit'} className={'w-full'} onClick={onsubmitbtn}>Sing Up</LoadingBtn>
                     <LoadingBtn loading={provider==='google'} loadingvalue={'Connecting With Google...'} variant='outline' className='w-full' onClick={handlegooglelogin}>Countinue With Google</LoadingBtn>
                    <LoadingBtn loading={provider==='github'} loadingvalue={'Connecting With Github...'}  variant='outline' className='w-full' onClick={handlegithublgin} >Continue With Github</LoadingBtn>

                </CardFooter>
            </Card>
        </div>
    )
}

export default SingupForm

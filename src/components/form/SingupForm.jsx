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
        await execute(async () => {
            try {
                await authClient.signIn.social({
                    provider: 'google',
                    callbackURL: '/dashboard'
                })
            } catch (error) {
                // console.log('google error :', error.message)
                setmessage(error?.message || "Something went wrong")
                setprovider(null)

            }
        })

    }
    const handlegithublgin = async () => {
        setprovider('github')
        await execute(async () => {
            try {
                await authClient.signIn.social({
                    provider: 'github',
                    callbackURL: '/dashboard'
                })
            } catch (error) {
                // console.log('github error:', error.message);
                setmessage(error?.message || "Something went wrong")
                setprovider(null)
            }
        })

    }
    return (
        <div className='w-full h-screen flex justify-center items-center bg-transparent'>
            <Card className={'w-full max-w-md shadow-[0px_0px_13px_0px_#fafafa] bg-white/10 backdrop-blur-md border border-white/20 text-gray-200 grid'}>
                <CardHeader>
                    <CardTitle>
                        Sign Up Your Account
                    </CardTitle>
                    <CardDescription className={'text-gray-300 '}>
                       Enter your details to create an account
                    </CardDescription>
                    <CardAction >
                        <Button variant='link' className='text-blue-500' asChild><Link href='/singin'>Sign In</Link></Button>
                    </CardAction>
                </CardHeader>
                <CardContent>
                    <form  >
                        <div className='grid gap-2'>
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
                                    <button className={'absolute right-3 top-1/2 -translate-y-1/2 bg-transparent text-gray-500 hover:text-gray-700'} type={'button'} onClick={() => setshow(!show)}>{show ? <EyeOff /> : <Eye />}</button>
                                </div>
                            </div>
                            <p className='text-red-600 mt-2'>{error}</p>
                            <p className='text-green-600 mt-2'>{success}</p>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className={'flex-col gap-2 text-gray-900'}>
                    <LoadingBtn loading={provider === 'singup'} loadingvalue={"Sing Up..."} type={'submit'} className={'w-full hover:scale-[1.02] transition-all duration-300'} onClick={onsubmitbtn}>Sign Up</LoadingBtn>
                    <LoadingBtn loading={provider === 'google'} loadingvalue={'Connecting With Google...'} variant='outline' className='w-full hover:bg-white/90' onClick={handlegooglelogin}>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                        </svg>
                        Countinue With Google</LoadingBtn>
                    <LoadingBtn loading={provider === 'github'} loadingvalue={'Connecting With Github...'} variant='outline' className='w-full hover:bg-white/90' onClick={handlegithublgin} >
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                            <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
                        </svg>
                        Continue With Github</LoadingBtn>

                </CardFooter>
            </Card>
        </div>
    )
}

export default SingupForm

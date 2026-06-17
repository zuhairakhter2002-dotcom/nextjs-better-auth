'use client'
import { Eye, EyeOff } from 'lucide-react'
import React, { useState } from 'react'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import Link from 'next/link'
import { authClient } from '@/lib/client-auth'
import { useRouter } from 'next/navigation'
import { useLoading } from '@/hooks/useLoading'
import LoadingBtn from '../ui/LoadingBtn'
import { Spinner } from '../ui/spinner'
function SinginForm() {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [show, setshow] = useState(false)
    const [error, seterror] = useState('')
    const {loading,execute} = useLoading()
    const [provider,setprovider] = useState('')

    const router = useRouter()
    

    const onsubmitbtn = async (e) => {

        e.preventDefault()
        setprovider('login')
        await execute(async() => {
          const { data, error } = await authClient.signIn.email({
                email, password
            })
            console.log('this is ', error);

            if (error) {
                console.log('this', error);
                seterror(error.message)
                setprovider(null)
            } else {
                console.log(data);
                setemail('')
                setpassword('')
                router.push('/dashboard')
            }
        })

    }
    const handlegooglelogin = async () => {
           setprovider('google')
           console.log("start");
           console.log(provider==='google');
           
        await execute(async()=>{
             try {
            await authClient.signIn.social({
                provider: 'google',
                callbackURL: '/dashboard'
            })
             console.log("after social");
        } catch (error) {
            console.log('google error :', error.message)
            seterror(error?.message || "Something went wrong")

        }
          console.log("finished");
        })
       
    }
    const handlegithublgin = async () => {
        await execute(async()=>{
            setprovider('github')
                 try {
            await authClient.signIn.social({
                provider: 'github',
                callbackURL: '/dashboard'
            })
        } catch (error) {
            console.log('github error:', error.message);
            seterror(error?.message || "Something went wrong")

        }
        })
       
    }
    return (
        <div className='w-full h-screen flex justify-center items-center bg-black'>
            <Card className="w-full max-w-sm shadow-[0px_0px_13px_0px_#fafafa] ">
                <CardHeader>
                    <CardTitle>
                        Login To Your Account
                    </CardTitle>
                    <CardDescription>
                        Enter your details
                    </CardDescription>
                    <CardAction>
                        <span>Create account</span>
                        <Button variant='link' asChild><Link href='/'>Sing Up</Link></Button>
                    </CardAction>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className='flex flex-col gap-6'>
                            <div className='grid gap-2'>
                                <Label htmlFor="email">Email</Label>
                                <Input className={'bg-blue-100'} type={'email'} placeholder={'Enter Your Email'} id={'email'} value={email} required onChange={(e) => setemail(e.target.value)} />
                            </div>
                            <div className='grid gap-2'>
                                <div className=' flex item-center'>
                                    <Label htmlFor='password'>Password</Label>
                                    <Link href={'/forgotpassword'} className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                    > Forgot your password?</Link>
                                </div>
                                <div className='relative'>
                                    <Input className={'bg-blue-100'} type={show ? 'text' : 'password'} placeholder={'Enter Your Password'} id={'password'} value={password} required onChange={(e) => setpassword(e.target.value)} />
                                    <button className={'absolute right-3 top-1/2 -translate-y-1/2 bg-transparent'} type={'button'} onClick={() => setshow(!show)}>{show ? <EyeOff /> : <Eye />}</button>
                                </div>
                            </div>
                            {error && <p className='text-red-600 mt-2'>{error}</p>}
                        </div>
                    </form>
                </CardContent>
                <CardFooter className={'flex flex-col gap-2'} >
                    <LoadingBtn loading={provider==='login'} loadingvalue={"LogIn..."} type={'submit'} className={'w-full'} onClick={onsubmitbtn}>Login</LoadingBtn>
                    <LoadingBtn loading={provider==='google'} loadingvalue={'Connecting With Google...'} variant='outline' className='w-full' onClick={handlegooglelogin}>Countinue With Google</LoadingBtn>
                    <LoadingBtn loading={provider==='github'} loadingvalue={'Connecting With Github...'}  variant='outline' className='w-full' onClick={handlegithublgin} >Continue With Github</LoadingBtn>
                </CardFooter>
            </Card>
        </div>
    )
}

export default SinginForm

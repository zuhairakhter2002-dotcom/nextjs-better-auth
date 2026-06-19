'use client'
import { useState } from "react";
import { authClient } from "@/lib/client-auth";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useLoading } from "@/hooks/useLoading";
import LoadingBtn from "@/components/ui/LoadingBtn";

export default function Page() {
    const [email, setemail] = useState('')
    const [error, seterror] = useState('')
    const [success, setsuccess] = useState('')
    const { loading, execute } = useLoading()


    const handleBtn = async (e) => {
        e.preventDefault()
        // console.log('btn');
        await execute(async () => {
            const { data, error } = await authClient.requestPasswordReset({
                email,
                redirectTo: `${window.location.origin}/reset-password`
            })
            // console.log('this for forget page',data,'or',error);

            if (error) {
                seterror(error.message)
                // console.log(error)
                return
            }
            setsuccess('Link send to your email')
        })


    }
    return (
        <>

            <div className=" h-screen bg-transparent w-full flex items-center justify-center gap-4">
                <div className="w-full max-w-sm rounded-2xl shadow-[0px_0px_13px_0px_#fafafa] bg-white/10
                 backdrop-blur-md text-gray-200
                      border border-white/20 p-7">
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
                                <Input className={'bg-blue-100'} value={email} id={'email'} type={'email'} placeholder={'Enter your email'} onChange={(e) => setemail(e.target.value)} />
                            </div>
                            <div className=" flex justify-center">
                                <LoadingBtn type={'submit'} loading={loading} loadingvalue={'Send link...'}>Send Link</LoadingBtn>

                            </div>
                        </form>
                    </div>
                    {error && <p className="my-2 text-[16px] text-red-500">{error}</p>}
                    {success && <p className="my-2 text-[16px] text-green-500">{success}</p>}
                </div>
            </div>
        </>
    )
}
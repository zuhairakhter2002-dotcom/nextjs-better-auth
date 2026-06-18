import React from 'react'
import { Spinner } from '@/components/ui/spinner'

function Loading() {
    return (
        <div>
            <div className="h-screen flex items-center justify-center">
                <Spinner className={'w-20 h-20'} />
            </div>
        </div>
    )
}

export default Loading

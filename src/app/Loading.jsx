import React from 'react'
import { Spinner } from '@/components/ui/spinner'

function Loading() {
    return (
        <div>
            <div className="h-screen flex items-center justify-center">
                <Spinner />
            </div>
        </div>
    )
}

export default Loading

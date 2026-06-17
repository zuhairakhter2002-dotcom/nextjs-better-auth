import React from 'react'

import { Button } from './button'
import { Spinner } from './spinner'

function LoadingBtn({loading,children,loadingvalue,...props}) {
    
  return (
   <Button disabled={loading} {...props}>{loading?(<> <Spinner/> {loadingvalue}</>):children}</Button>
  )
}

export default LoadingBtn

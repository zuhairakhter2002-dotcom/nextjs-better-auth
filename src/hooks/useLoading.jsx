import {React,useState} from 'react'

export function useLoading() {
    const [loading,setloading] = useState(false)
    const execute = async(fn) => {
        try{
            setloading(true)
            // console.log('intail state',loadingkey);
            return await fn()
            
        } finally{
            setloading(false)
        }
        
        
    }
  return {
    loading,execute
  }
}



import { useState , useEffect, Dispatch, SetStateAction } from 'react'

type Return<T> = [
    T,
    Dispatch<SetStateAction<T>>
]

export default function usePersistentSate<T>(key: string, initialValue: T): Return<T> { 
    const [ state, setState ] = useState(null)

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    }, [state])

    return [ state, setState ] 
}
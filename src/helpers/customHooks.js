import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const useURLParams = () => {
  const { hash, pathname } = useLocation()
  const display = pathname.replace(/\//g, '')
  const search = decodeURI(hash.slice(1))

  return { display, search }
}

const useScrollListeners = callback => {
  useEffect(() => {
    document.addEventListener('scroll', callback)
    return () => document.removeEventListener('scroll', callback)
  }, [callback])
}

export { useURLParams, useScrollListeners }

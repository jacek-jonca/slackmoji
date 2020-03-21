import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const useScrollListeners = callback => {
  useEffect(() => {
    document.addEventListener('scroll', callback)
    return () => document.removeEventListener('scroll', callback)
  }, [callback])
}

const useScreenResize = (widthLimit = 768) => {
  const [width, setWidth] = useState(window.innerWidth)
  const resetWidth = () => setWidth(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', resetWidth)
    return () => window.removeEventListener('resize', resetWidth)
  }, [])

  return width < widthLimit
}

const useUrlParams = () => {
  const { hash, pathname } = useLocation()
  const display = pathname.replace(/\//g, '')
  const search = decodeURI(hash.slice(1))
  return { display, search }
}

export { useScrollListeners, useScreenResize, useUrlParams }

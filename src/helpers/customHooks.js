import { useLocation } from 'react-router-dom'

const useURLParams = () => {
  const { hash, pathname } = useLocation()
  const display = pathname.replace(/\//g, '')
  const search = decodeURI(hash.slice(1))

  return { display, search }
}

export { useURLParams }

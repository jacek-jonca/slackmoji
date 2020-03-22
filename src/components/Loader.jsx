import React, { memo, useState, useCallback, useEffect, useRef } from 'react'


const LOADING_TEXT = "Checking on those 'mojis..."

const Loader = () => {
  const [index, setIndex] = useState(0)
  const timeout = useRef()
  const text = LOADING_TEXT.slice(0, index)

  const showText = useCallback(() => {
    if (index < LOADING_TEXT.length) {
      setIndex(prevIndex => prevIndex + 1)
      timeout.current = setTimeout(showText, 45)
    }
  }, [index])

  useEffect(() => {
    timeout.current = setTimeout(showText, 45)
    return () => clearTimeout(timeout.current)
  },[index, showText])

  return (
    <div className='loader'>
      <img
        src='faces/bitmoji-for-that.png'
        alt='me'
        className='load-image'
      />
      <h2>{text}</h2>
    </div>
  )
}

export default memo(Loader)
export { LOADING_TEXT }

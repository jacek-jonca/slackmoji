import React, { memo, useState, useCallback, useEffect, useRef } from 'react'

const Loader = () => {
  const [index, setIndex] = useState(0)
  const timeout = useRef()
  const fullText = "Checking on those 'mojis..."
  const text = fullText.slice(0, index)

  const showText = useCallback(() => {
    if (index < fullText.length) {
      setIndex(prevIndex => prevIndex + 1)
    }
    timeout.current = setTimeout(showText, 45)
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
      <h2>
        {text}
      </h2>
    </div>
  )
}

export default memo(Loader)

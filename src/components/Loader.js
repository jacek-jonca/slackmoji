import React, { useState, useEffect } from 'react'

const Loader = () => {
  const [index, setIndex] = useState(0)
  const fullText = "Checking on those 'mojis..."
  const text = fullText.slice(0, index)
  let timeout

  useEffect(() => {
    timeout = setTimeout(showText, 60)
    return () => clearTimeout(timeout)
  },[index])

  const showText = () => {
    if (index < fullText.length) {
      setIndex(prevIndex => prevIndex + 1)
    } else {
      setIndex(0)
    }
    timeout = setTimeout(showText, 60)
  }

  return (
    <div className='loader flex column center-cross'>
      <img
        src='faces/bitmoji-for-that.png'
        alt='me'
        className='load-image'
      />
      <h2 className='loading-text center-text'>
        {text}
      </h2>
    </div>
  )
}

export default Loader

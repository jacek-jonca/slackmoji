import React, { memo } from 'react'

const Error = () => (
  <div className='loader'>
    <img
      src='faces/facepalm.png'
      alt='error'
      className='load-image'
    />
    <h2>
      Whoops! Something went wrong.
    </h2>
  </div>
)

export default memo(Error)

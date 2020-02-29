import React, { memo } from 'react'

const NoResults = () => {
  return (
    <div className='no-results flex column center-cross'>
        <h2 className='center-text'>
          Awkward... Try another search.
        </h2>
        <img
          src='faces/awkward.png'
          alt='awkward-face'
        />
    </div>
  )
}

export default memo(NoResults)

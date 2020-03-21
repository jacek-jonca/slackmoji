import React, { memo } from 'react'

const NoResults = () => {
  return (
    <div className='no-results'>
      <h2>
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

import React from 'react'

export default () => {
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
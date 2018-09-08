import React from 'react'

export default ({bitmoji: {src, tags}}) => {
  const source = src.replace(/%s/g, process.env.REACT_APP_BITMOJI_ID)

  return (
    <li className='flex-container column center-cross margin-m'>
      <img src={source} alt={`bitmoji ${tags[0]}`} />
      <ul>
        { tags.map(tag => <li className='font-s' key={tag}>{tag}</li>) }
      </ul>
    </li>
  )
}
import React from 'react'

export default ({bitmoji: {src, tags}}) => {
  const source = src.replace(/%s/g, process.env.REACT_APP_BITMOJI_ID) + '&width=200'

  return (
    <li className='bitmoji-card flex-container column center-cross'>
      <img src={source} alt={`bitmoji ${tags[0]}`} />
      <ul className='column-2 padding-ls padding-bs'>
        { tags.map(tag => <li className='font-s' key={tag}>{tag}</li>) }
      </ul>
    </li>
  )
}
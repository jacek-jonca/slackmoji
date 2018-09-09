import React from 'react'

export default ({bitmoji: {src, tags}}) => {
  const source = src.replace(/%s/g, process.env.REACT_APP_BITMOJI_ID) + '&width=200'
  const mid = Math.ceil(tags.length/2)
  const tags1 = tags.slice(0, mid)
  const tags2 = tags.slice(mid)
  
  return (
    <li className='bitmoji-card flex-container column'>
      <img src={source} alt={`bitmoji ${tags[0]}`} />
      <div className='flex padding-s'>
        <ul className='flex-1'>
        { tags1.map(tag => <li className='font-s' key={tag}>{tag}</li>) }
        </ul>
        <ul className='flex-1'>
        { tags2.map(tag => <li className='font-s' key={tag}>{tag}</li>) }
        </ul>
      </div>
    </li>
  )
}
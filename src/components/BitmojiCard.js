import React from 'react'

const filterTags = (tags) => {
  const filteredTags = tags.map(tag => tag.replace(/\*/, ''))
  return [...new Set(filteredTags)]
}

const splitTags = (tags) => {
  const filteredTags = filterTags(tags)
  const mid = Math.ceil(filteredTags.length/2)
  const tags1 = filteredTags.slice(0, mid)
  const tags2 = filteredTags.slice(mid)
  return {tags1, tags2}
}

const imageSrc = (src) => {
  const url = src.replace(/%s/g, process.env.REACT_APP_BITMOJI_ID)
  return url + '&width=200'
}

export default ({bitmoji: {src, tags}}) => {
  const {tags1, tags2} = splitTags(tags)
  
  return (
    <li className='bitmoji-card flex-container column'>
      <img 
        src={imageSrc(src)} 
        alt={`bitmoji ${tags[0]}`}
        className='border-b'
      />
      <div className='flex center margin'>
        <ul className='flex column align-start padding-rs'>
        { tags1.map(tag => <li className='font-s' key={tag}>'{tag}'</li>) }
        </ul>
        <ul className='flex column align-start padding-ls'>
        { tags2.map(tag => <li className='font-s' key={tag}>'{tag}'</li>) }
        </ul>
      </div>
    </li>
  )
}
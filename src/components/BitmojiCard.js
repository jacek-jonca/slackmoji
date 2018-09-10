import React from 'react'
import {splitTags, imageSrc} from '../helpers/bitmojiCard'

const tagItems = (tags) => {
  return tags.map(tag => <li className='font-s' key={tag}>'{tag}'</li>)
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
      <div className='flex margin'>
        <ul className='flex column align-start flex-1 padding-rs'>
        { tagItems(tags1) }
        </ul>
        <ul className='flex column align-start flex-1 padding-ls'>
        { tagItems(tags2) }
        </ul>
      </div>
    </li>
  )
}
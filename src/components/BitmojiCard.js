import React from 'react'
import {splitTags, imageSrc} from '../helpers/bitmojiCard'

const TagColumn = ({tags}) => {
  return (
    <ul className='flex column align-start flex-1 padding-rs'>
      { tags.map(tag => <li key={tag}>'{tag}'</li>) }
    </ul>
  )
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
        <TagColumn tags={tags1} />
        <TagColumn tags={tags2} />
      </div>
    </li>
  )
}
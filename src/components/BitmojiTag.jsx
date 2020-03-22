import React from 'react'
import { Link } from 'react-router-dom'
import {
  canCopy,
  copyToClipboard,
  useUrlParams
} from '../helpers'

const BitmojiTag = ({ tag }) => {
  const { display } = useUrlParams()
  const handleCopy = ({ target: { dataset: { tag }}}) => {
    copyToClipboard(`/bitmoji ${tag}`)
  }

  return (
    <li className='tag' key={tag}>
      <span>
        <Link to={{
          pathname: display,
          hash: `#${encodeURI(tag)}`
          }}>
          {tag}
        </Link>
      </span>
      <span className={canCopy() ? 'tooltip' : 'hide'}>
        <img
          onClick={handleCopy}
          data-tag={tag}
          className='icon'
          src='./copy-icon.png'
          alt='copy-icon'
        />
        <span className='tooltip-text'>
          Copy to Clipboard
        </span>
      </span>
    </li>
  )
}

export default BitmojiTag

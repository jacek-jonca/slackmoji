import React, { Fragment, useState } from 'react'
import {validateURL} from '../helpers/bitmojiURLs'

const BitmojiURLField = ({
  changeBitmojiId,
  defaultBitmoji,
  toggleURLField
}) => {
  const [url, setUrl] = useState('')
  const btnText = !url && !defaultBitmoji ? 'Reset' : 'Submit'

  const handleChange = ({target: {value}}) => {
    validateURL(value) ? setUrl(value) : alert('Please enter a valid Bitmoji URL')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    changeBitmojiId(url)
    toggleURLField()
    setUrl('')
  }

  return (
    <Fragment>
      <form
        onSubmit={handleSubmit}
        className='url-form tooltip flex space-between'
      >
        <input
          className='margin-m grow-1'
          type='text'
          value={url}
          onChange={handleChange}
          placeholder='Enter URL of your Bitmoji image'
        />
        <input className='btn center-self-cross' type='submit' value={btnText}/>
        <span className='tooltip-text tooltip-l'>
          Ctrl + Click on a Bitmoji in Slack<br/>
          and select 'Copy Link'
          <img src='./copy.gif' alt='tim-statue'/>
        </span>
      </form>
    </Fragment>
  )
}

export default BitmojiURLField

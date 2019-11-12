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
        <div className='tooltip-text tooltip-l flex-container'>
          <p>Ctrl + Click on a Bitmoji in Slack and select 'Copy Link'</p>
          <img src='./copy.gif' alt='tim-statue'/>
        </div>
      </form>
    </Fragment>
  )
}

export default BitmojiURLField

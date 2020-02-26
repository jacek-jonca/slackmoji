import React from 'react'
import { useHistory } from 'react-router-dom';
import { useURLParams } from '../helpers/customHooks'
import { generateURL } from '../helpers/url'

const DisplayButton = ({ value }) => {
  const { display, search } = useURLParams()
  const label = value.replace(/^\w/, c => c.toUpperCase())
  const checked = value === display
  const history = useHistory()
  const handleClick = () => history.push(generateURL(value, search))

  return (
    <div className='margin-m'>
      <label htmlFor={`bitmoji-${label}`}>
        { `Bitmoji ${label}` }
      </label>
        <input
          type='radio'
          checked={checked}
          className='margin-m'
          id={`bitmoji-${label}`}
          onChange={handleClick}
        />
    </div>
  )
}

export default (props) => {
  return (
    <div className='display flex space-even start-cross'>
      <DisplayButton value='solo' />
      <DisplayButton value='friends' />
    </div>
  )
}

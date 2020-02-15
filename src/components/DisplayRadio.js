import React from 'react'
import { Link } from 'react-router-dom'
import { useURLParams } from '../helpers/customHooks'

const RadioButton = ({ value }) => {
  const { display, search } = useURLParams()
  const label = value.replace(/^\w/, c => c.toUpperCase())
  const checked = value === display
  const labelText = `Bitmoji ${label}`

  return (
    <div className='margin-m'>
      <label htmlFor={`bitmoji-${label}`}>
        { labelText }
      </label>
      <Link to={`/${value}#${search}`}>
        <input
          type='radio'
          defaultChecked={checked}
          className='margin-m'
          id={`bitmoji-${label}`}
        />
      </Link>
    </div>
  )
}

export default (props) => {
  return (
    <div className='radio flex center-self center-cross'>
      <RadioButton value='solo' />
      <RadioButton value='friends' />
    </div>
  )
}

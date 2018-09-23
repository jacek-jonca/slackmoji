import React from 'react'

const RadioButton = ({display, changeDisplay, value}) => {
  const label = value.replace(/^\w/, c => c.toUpperCase())
  const checked = value === display
  const labelText = `Bitmoji ${label}`
  return (
    <div className='margin'>
      <label htmlFor={labelText}>
        {labelText}
      </label>
      <input
        type='radio'
        name='display'
        value={value}
        onChange={changeDisplay}
        checked={checked}
        className='margin'
        aria-label={labelText}
      />
    </div>
  )
}

export default (props) => {
  return (
    <div className='radio flex center-self center-cross'>
      <RadioButton value={'solo'} {...props} />
      <RadioButton value={'friends'} {...props} />
    </div>
  )
}
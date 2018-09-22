import React from 'react'

const RadioButton = ({display, changeDisplay, value}) => {
  const label = value.replace(/^\w/, c => c.toUpperCase())
  const checked = value === display

  return (
    <div className='margin'>
      <label>{`Bitmoji ${label}`}</label>
      <input
        type='radio'
        name='display'
        value={value}
        onChange={changeDisplay}
        checked={checked}
        className='margin'
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
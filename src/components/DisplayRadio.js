import React from 'react'

const radioButton = (value, {display, changeDisplay}) => {
  const label = value.replace(/^\w/, c => c.toUpperCase())
  const checked = value === display

  return (
    <div className='margin-m'>
      <label>{`Bitmoji ${label}`}</label>
      <input
        type='radio'
        name='display'
        value={value}
        onChange={changeDisplay}
        checked={checked}
        className='margin-m'
      />
    </div>
  )
}

export default (props) => {
  return (
    <div className='radio flex center-self center-cross'>
      {radioButton('solo', props)}
      {radioButton('friends', props)}
    </div>
  )
}
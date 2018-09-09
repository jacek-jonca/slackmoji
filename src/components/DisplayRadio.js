import React from 'react'

const radioButton = (value, {display, changeDisplay}) => {
  const label = value.replace(/^\w/, c => c.toUpperCase())
  const checked = value === display

  return (
    <div className='margin-m flex column center-cross'>
      <label>{`Bitmoji ${label}`}</label>
      <input
        type='radio'
        name='display'
        value={value}
        onChange={changeDisplay}
        checked={checked}
      />
    </div>
  )
}

export default (props) => {
  return (
    <div className='radio flex'>
      {radioButton('solo', props)}
      {radioButton('friends', props)}
    </div>
  )
}
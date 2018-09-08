import React from 'react'

const radioButton = (value, { display, changeDisplay }) => {
  const label = value.replace(/^\w/, c => c.toUpperCase())
  const checked = value === display

  return (
    <div className='margin-m'>
      <label>{label}</label>
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
    <div>
      <div className='flex-container center'>
        {radioButton('solo', props)}
        {radioButton('friends', props)}
      </div>
      <div>
        <input
          type='text'
          name='search'
          value={props.search}
          onChange={props.changeDisplay}
        />
      </div>
    </div>
  )
}
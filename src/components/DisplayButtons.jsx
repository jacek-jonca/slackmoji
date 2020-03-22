import React, { memo } from 'react'
import { useHistory } from 'react-router-dom'
import { string } from 'prop-types'
import { generateUrl, useUrlParams } from '../helpers'

const DisplayButton = memo(({ value }) => {
  const { display, search } = useUrlParams()
  const checked = value === display
  const history = useHistory()
  const handleClick = () => history.push(generateUrl(value, search))

  const label = () => (value === 'solo' ? 'Solo' : 'Friends')

  return (
    <div className='display-radio'>
      <label htmlFor={`bitmoji-${value}`}>{ label() }</label>
        <input
          type='radio'
          checked={checked}
          id={`bitmoji-${value}`}
          onChange={handleClick}
        />
    </div>
  )
})

const DisplayButtons = () => {
  return (
    <div className='display'>
      <DisplayButton value='solo' />
      <DisplayButton value='friends' />
    </div>
  )
}

DisplayButton.propTypes = {
  value: string.isRequired
}

export default memo(DisplayButtons)
export { DisplayButton }

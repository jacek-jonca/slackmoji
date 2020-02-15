import React from 'react'
import { Link } from 'react-router-dom'
import { useURLParams } from '../helpers/customHooks'

const DisplayButton = ({ value }) => {
  const { display, search } = useURLParams()
  const label = value.replace(/^\w/, c => c.toUpperCase())
  const checked = value === display

  return (
    <button
      disabled={checked}
      className={`margin-m ${checked ? 'btn-disabled' : 'btn'}`}
      id={`bitmoji-${label}`}
    >
      <Link to={{
        pathname: value,
        hash: `#${encodeURI(search)}`
        }}>
        Bitmoji {label}
      </Link>
    </button>
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

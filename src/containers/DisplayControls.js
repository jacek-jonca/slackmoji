import React from 'react'
import DisplayRadio from '../components/DisplayRadio'
import SearchField from '../components/SearchField'
import debounce from '../helpers/debounce'

export default ({
  display,
  changeDisplay
}) => {

  return [
    <DisplayRadio
      display={display}
      changeDisplay={changeDisplay}
      key='radio'
    />,
    <SearchField
      changeDisplay={debounce(
        changeDisplay,
        500)
      }
      key='search'
    />
  ]
}
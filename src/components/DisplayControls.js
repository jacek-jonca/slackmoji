import React from 'react'
import DisplayRadio from '../components/DisplayRadio'
import SearchField from '../components/SearchField'
import debounce from '../helpers/debounce'

export default ({
  loading,
  search,
  display,
  changeDisplay
}) => {
  if (loading) return null

  return [
    <DisplayRadio
      display={display}
      changeDisplay={changeDisplay}
      key='radio'
    />,
    <SearchField
      search={search}
      changeDisplay={debounce(
        changeDisplay,
        500)
      }
      key='search'
    />
  ]
}
import React, {Fragment} from 'react'
import DisplayRadio from '../components/DisplayRadio'
import SearchField from '../components/SearchField'

export default ({
  display,
  changeDisplay,
  changeSearch,
  search
}) => {

  return (
    <Fragment>
      <DisplayRadio
        display={display}
        changeDisplay={changeDisplay}
      />
      <SearchField
        changeSearch={changeSearch}
        search={search}
      />
    </Fragment>
  )
}
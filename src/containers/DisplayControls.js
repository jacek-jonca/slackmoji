import React, {Fragment} from 'react'
import DisplayRadio from '../components/DisplayRadio'
import SearchField from '../components/SearchField'
import debounce from '../helpers/debounce'

export default ({
  display,
  changeDisplay
}) => {

  return (
    <Fragment>
      <DisplayRadio
        display={display}
        changeDisplay={changeDisplay}
      />
      <SearchField
        changeDisplay={debounce(
          changeDisplay,
          500)
        }
      />
    </Fragment>
  )
}
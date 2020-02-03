import React, { useState } from 'react'
import { useURLParams } from '../helpers/customHooks'
import debounce from '../helpers/debounce'
import { updateSearchURL } from '../helpers/url'

const SearchField = () => {
  const { display, search } = useURLParams()
  const [searchTerm, setSearchTerm] = useState(search)

  const handleSearch = ( { target: { value } } ) => {
    setSearchTerm(value)
    debounce(updateSearchURL(display, value), 3000)
  }

  return(
    <input className='search margin-m'
      type='text'
      name='search'
      value={searchTerm}
      onChange={handleSearch}
      placeholder='Search for keywords'
    />
  )
}

export default SearchField

import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useURLParams } from '../helpers/customHooks'
import { generateURL } from '../helpers/url'

const SearchField = () => {
  const { display, search } = useURLParams()
  const [searchTerm, setSearchTerm] = useState(search)
  const history = useHistory()

  useEffect(() => setSearchTerm(search), [search])

  const handleChange = ( { target: { value } } ) => setSearchTerm(value)

  const handleSearch = () => history.push(generateURL(display, searchTerm))

  return(
    <div className='flex search column'>
      <input className='margin-m'
        type='text'
        name='search'
        value={searchTerm}
        onChange={handleChange}
        placeholder='Search for keywords'
      />
      <button
        className='btn center-self-cross'
        onClick={handleSearch}
       >
        Search
      </button>
    </div>
  )
}

export default SearchField

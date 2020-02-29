import React, { memo, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useURLParams } from '../helpers/customHooks'
import { generateURL } from '../helpers/url'

const SearchField = () => {
  const { display, search } = useURLParams()
  const [searchTerm, setSearchTerm] = useState(search)
  const history = useHistory()

  useEffect(() => setSearchTerm(search), [search])

  const handleChange = ({ target: { value } }) => setSearchTerm(value)

  const handleSearch = () => history.push(generateURL(display, searchTerm))

  const handleKeyPress = ({ key }) => {
    if (key === 'Enter') {
      handleSearch()
    }
  }

  return(
    <div className='flex space-between search'>
      <input className='margin-m grow-1'
        type='text'
        name='search'
        aria-label='search-field'
        value={searchTerm}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        placeholder='Search for keywords'
      />
      <button
        className='margin-m btn'
        onClick={handleSearch}
       >
        Search
      </button>
    </div>
  )
}

export default memo(SearchField)

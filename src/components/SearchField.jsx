import React, { memo, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { generateUrl, useUrlParams } from '../helpers/'

const SearchField = () => {
  const history = useHistory()
  const { display, search } = useUrlParams()
  const [searchTerm, setSearchTerm] = useState(search)

  useEffect(() => setSearchTerm(search), [search])

  const handleChange = ({ target: { value } }) => setSearchTerm(value)

  const handleSearch = () => history.push(generateUrl(display, searchTerm))

  const handleKeyPress = ({ key }) => {
    if (key === 'Enter') {
      handleSearch()
    }
  }

  return(
    <div className='search'>
      <input
        type='text'
        name='search'
        aria-label='search-field'
        value={searchTerm}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        placeholder='Search for keywords'
      />
      <button
        className='btn'
        onClick={handleSearch}
       >
        Search
      </button>
    </div>
  )
}

export default memo(SearchField)

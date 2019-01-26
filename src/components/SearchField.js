import React, { useState, useEffect } from 'react'

const SearchField = (props) => {
  const [search, setSearch] = useState(props.search)

  useEffect((args) => {
    props.search !== search && setSearch(props.search)
  }, [props.search])

  const handleSearch = ({target: {value}}) => {
    setSearch(value)
    props.changeSearch(value)
  }

  return(
    <input className='search margin-m'
      type='text'
      name='search'
      value={search}
      onChange={handleSearch}
      placeholder='Search for keywords'
    />
  )
}

export default SearchField

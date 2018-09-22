import React from 'react'
import { render } from 'react-testing-library'
import SearchField from '../SearchField'

describe('SearchField', () => {
  test('it renders an input', () => {
    
    const { getByPlaceholderText } = render(<SearchField />)
    
    const searchTerm = 'toilet of love'
    
    const searchNode = getByPlaceholderText('Search for keywords')
  })

})
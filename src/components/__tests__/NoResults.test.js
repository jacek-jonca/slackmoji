import React from 'react'
import { render, waitForElement } from 'react-testing-library'
import NoResults from '../NoResults'

describe('No Results', () => {
  const { container, getByText } = render(<NoResults />)
  
  test('it renders an image', () => {
    const image = container.querySelector('img')
    
    expect(image).toBeDefined()
  })
  
  test('it renders a header', () => {
    const textNode = getByText('Awkward... Try another search.')
    
    expect(textNode).toBeDefined()
  })
})
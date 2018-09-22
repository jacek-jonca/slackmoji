import React from 'react'
import { render, waitForElement } from 'react-testing-library'
import NoResults from '../NoResults'

describe('No Results', () => {
  test('it renders an image and a header', () => {
    
    const { container, getByText } = render(<NoResults />)
    
    const image = container.querySelector('img')
    const textNode = getByText('Awkward... Try another search.')
    
    expect(image).toBeDefined()
    expect(textNode).toBeDefined()
  })
})
import React from 'react'
import { render, waitForElement } from 'react-testing-library'
import Loader from '../Loader'

describe('Loader', () => {
  test('it renders an image and a header', () => {
    
    const { container } = render(<Loader />)
    
    const image = container.querySelector('img')
    const h2 = container.querySelector('h2')
    
    expect(image).toBeDefined()
    expect(h2).toBeDefined()
  })
  
  test('it renders text', async () => {
    
    const { getByText } = render(<Loader />)

    await waitForElement(() => getByText("Checking on those 'mojis..."))
  })
})
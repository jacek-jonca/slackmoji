import React from 'react'
import { render, waitForElement } from 'react-testing-library'
import Loader from '../Loader'

describe('Loader', () => {
  const { container, getByText } = render(<Loader />)
  
  test('it renders an image', () => {
    const h2 = container.querySelector('h2')
    
    expect(h2).toBeDefined()
  })
  
  test('it renders a header', () => {    
    const h2 = container.querySelector('h2')
    
    expect(h2).toBeDefined()
  })
  
  test('it renders text', async () => {
    await waitForElement(() => getByText("Checking on those 'mojis..."))
  })
})
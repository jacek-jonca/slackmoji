import React from 'react'
import { render } from 'react-testing-library'
import DisplayControls from '../DisplayControls'

describe('Display Controls', () => {  
  const props = {
    display: 'solo',
    changeDisplay: console.log
  }
  
  const { getByLabelText, getByPlaceholderText } = render(<DisplayControls {...props} />)

  test('it renders a search field', () => {
    const searchNode = getByPlaceholderText('Search for keywords')
    
    expect(searchNode).toBeDefined()
  })
  
  test('it renders radio buttons', () => {
    const soloButton = getByLabelText('Bitmoji Solo')
    const friendsButton = getByLabelText('Bitmoji Friends')
    
    expect(soloButton).toBeDefined()
    expect(friendsButton).toBeDefined()
  })
})
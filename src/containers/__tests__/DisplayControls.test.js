import React from 'react'
import { render } from 'react-testing-library'
import DisplayControls from '../DisplayControls'

describe('Display Controls', () => {
  test('it renders a search field and radio buttons', () => {
    
    const props = {
      display: 'solo',
      changeDisplay: console.log
    }
    
    const { getByPlaceholderText, getByLabelText } = render(<DisplayControls {...props} />)
    
    const soloButton = getByLabelText('Bitmoji Solo')
    const friendsButton = getByLabelText('Bitmoji Friends')
    const searchNode = getByPlaceholderText('Search for keywords')
    
    expect(soloButton).toBeDefined()
    expect(friendsButton).toBeDefined()
    expect(searchNode).toBeDefined()
  })
  
})
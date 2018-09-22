import React from 'react'
import { render } from 'react-testing-library'
import DisplayRadio from '../DisplayRadio'

describe('Display Radio', () => {
  test('it renders radio buttons', () => {
    
    const props = {
      display: 'solo',
      changeDisplay: console.log
    }
    
    
    const { getByLabelText } = render(<DisplayRadio {...props} />)
    
    const soloButton = getByLabelText('Bitmoji Solo')
    const friendsButton = getByLabelText('Bitmoji Friends')
    
    expect(soloButton).toBeDefined()
    expect(friendsButton).toBeDefined()
  })
})
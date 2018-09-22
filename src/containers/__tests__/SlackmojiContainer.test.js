import React from 'react'
import { render } from 'react-testing-library'
import SlackmojiContainer from '../SlackmojiContainer'

describe('Slackmoji Container', () => {
  test('it renders display controls', () => {
    const solo = {
      src: 'https://perthzoo.wa.gov.au/sites/default/files/animal/images/Koala_AH2Q1878_edbook.jpg', 
      tags: [
        'koala',
        'eucalyptus',
        'Australia',
        'Oz'
      ],
      comic_id: 1
    }
    
    const friends = {
      src: 'https://i.ytimg.com/vi/WlaEXGISF7I/maxresdefault.jpg', 
      tags: [
        'kangaroo',
        'marsupial',
        'Australia',
        'Oz'
      ],
      comic_id: 2
    }
    
    const props = {
      solo: [solo],
      friends: [friends]
    }
    
    const { getByPlaceholderText, getByLabelText } = render(<SlackmojiContainer {...props} />)
    
    
  })
  
})
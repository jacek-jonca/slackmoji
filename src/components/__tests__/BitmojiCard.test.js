import React from 'react'
import { render } from 'react-testing-library'
import 'jest-dom/extend-expect'
import BitmojiCard from '../BitmojiCard'

describe('Bitmoji Card', () => {
  test('it renders an image and a list of tag names', () => {
    
    const props = {
      bitmoji: {
        src: 'https://perthzoo.wa.gov.au/sites/default/files/animal/images/Koala_AH2Q1878_edbook.jpg', 
        tags: [
          'koala',
          'eucalyptus',
          'Australia',
          'Oz'
        ]
      }
    }
    
    const { container } = render(<BitmojiCard {...props} />)
    
    const image = document.querySelector('img')
    const tagNode = container.querySelector('li')
    
    expect(container).toContainElement(image)
    expect(tagNode).toHaveTextContent('koala')
  })
})
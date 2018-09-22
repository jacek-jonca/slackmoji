import React from 'react'
import { render } from 'react-testing-library'
import 'jest-dom/extend-expect'
import BitmojiCard from '../BitmojiCard'

describe('Bitmoji Card', () => {
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
  
  test('it renders an image', () => {
    const image = document.querySelector('img')
    
    expect(container).toContainElement(image)
  })
  
  test('it renders a tag names', () => {
    const tagNode = container.querySelector('li')
    
    expect(tagNode).toHaveTextContent(props.bitmoji.tags[0])
  })
})
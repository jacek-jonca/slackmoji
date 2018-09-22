import React from 'react'
import { render } from 'react-testing-library'
import SlackmojiContainer from '../SlackmojiContainer'

describe('Slackmoji Container', () => {
  test('it renders solo bitmojis as a default', () => {
    const bitmoji = {
      src: 'https://perthzoo.wa.gov.au/sites/default/files/animal/images/Koala_AH2Q1878_edbook.jpg', 
      tags: [
        'koala',
        'eucalyptus',
        'Australia',
        'Oz'
      ],
      comic_id: 1
    }
    
    const props = {
      solo: [bitmoji],
      friends: []
    }
    
    const { getByText, getByAltText } = render(<SlackmojiContainer {...props} />)
    
    const tagNode = getByText(`'${bitmoji.tags[0]}'`)
    const imgNode = getByAltText(`bitmoji ${bitmoji.tags[0]}`)

    expect(tagNode).toBeDefined()
    expect(imgNode).toBeDefined()
  })

  test('it renders no results for no bitmojis', () => {
    const props = {
      solo: [],
      friends: []
    }

    const { container, getByText } = render(<SlackmojiContainer {...props} />)

    const image = container.querySelector('img')
    const textNode = getByText('Awkward... Try another search.')

    expect(image).toBeDefined()
    expect(textNode).toBeDefined()
  })
})
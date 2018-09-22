import React from 'react'
import { render } from 'react-testing-library'
import BitmojiList from '../BitmojiList'

describe('Bitmoji List', () => {
  test('it renders bitmoji cards', () => {  
    const bitmoji1 = {
      src: 'https://perthzoo.wa.gov.au/sites/default/files/animal/images/Koala_AH2Q1878_edbook.jpg', 
      tags: [
        'koala',
        'eucalyptus',
        'Australia',
        'Oz'
      ],
      comic_id: 1
    }
    
    const bitmoji2 = {
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
      bitmojis: [
        bitmoji1, 
        bitmoji2
      ]
    }
    
    const { getByText, getByAltText } = render(<BitmojiList {...props} />)
    
    const firstTagNode = getByText(`'${bitmoji1.tags[0]}'`)
    const secondTagNode = getByText(`'${bitmoji2.tags[0]}'`)
    
    const firstImgNode = getByAltText(`bitmoji ${bitmoji1.tags[0]}`)
    const secondImgNode = getByAltText(`bitmoji ${bitmoji2.tags[0]}`)
    
    expect(firstTagNode).toBeDefined()
    expect(secondTagNode).toBeDefined()
    expect(firstImgNode).toBeDefined()
    expect(secondImgNode).toBeDefined()
  })
  
})
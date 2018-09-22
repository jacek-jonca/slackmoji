import React from 'react'
import { render, fireEvent, wait, cleanup } from 'react-testing-library'
import axios from 'axios'
import App from '../App'


describe('App', () => {  
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

  const response = { 
    data: {
      body: {
        solo: [bitmoji1], 
        friends: [bitmoji2]
      }
    }
  }
  
  afterEach(cleanup)
  beforeEach(() => {
    axios.get = jest.fn(() => Promise.resolve(response))
  })
  
  test('It fetches bitmojis and renders them to the page', async () => {
    const { getByText, getByAltText } = render(<App />)
    
    await wait(() => getByText(`'${bitmoji1.tags[0]}'`))
    
    const tagNode = getByText(`'${bitmoji1.tags[0]}'`)
    const imgNode = getByAltText(`bitmoji ${bitmoji1.tags[0]}`)

    expect(tagNode).toBeDefined()
    expect(imgNode).toBeDefined()
  })
})
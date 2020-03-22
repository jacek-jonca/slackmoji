import React from 'react'

import BitmojiCard from '../components/BitmojiCard'
import BitmojiList from './BitmojiList'
import { DEFAULT_BITMOJI, mockBitmojiList, renderWithRouter } from '../helpers/__mocks__'

describe('BitmojiList', () => {
  const defaultProps = {
    bitmojis: mockBitmojiList.solo,
    bitmojiId: DEFAULT_BITMOJI
  }

  describe('initial render', () => {
    it('renders BitmojiCards', () => {
      const component = renderWithRouter(
        <BitmojiList {...defaultProps} />
      )

      expect(component.find(BitmojiCard)).toHaveLength(4)
    })
  })
})

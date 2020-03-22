import React from 'react'

import BitmojiCard from '../components/BitmojiCard'
import BitmojiTag from '../components/BitmojiTag'
import { DEFAULT_BITMOJI, mockBitmojiList, renderWithRouter } from '../helpers/__mocks__'

describe('BitmojiCard', () => {
  const defaultProps = {
    bitmoji: mockBitmojiList.solo[0],
    bitmojiId: DEFAULT_BITMOJI
  }

  describe('initial render', () => {
    it('renders an image and two tags', () => {
      const component = renderWithRouter(
        <BitmojiCard {...defaultProps} />
      )

      expect(component.find('li > img')).toHaveLength(1)
      expect(component.find(BitmojiTag)).toHaveLength(2)
    })
  })

  describe('on click', () => {
    it('toggles the number of tags', () => {
      const component = renderWithRouter(
        <BitmojiCard {...defaultProps} />
      )

      component.find('.tag-arrow').simulate('click')
      expect(component.find(BitmojiTag)).toHaveLength(4)

      component.find('.tag-arrow').simulate('click')
      expect(component.find(BitmojiTag)).toHaveLength(2)
    })
  })
})

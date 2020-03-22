import React from 'react'

import DisplayButtons from '../components/DisplayButtons'
import SearchField from '../components/SearchField'
import BitmojiSelector from '../components/BitmojiSelector'
import BitmojiList from './BitmojiList'
import NoResults from '../components/NoResults'
import SlackmojiContainer from './SlackmojiContainer'
import { mockBitmojiList, renderWithRouter } from '../helpers/__mocks__'

describe('SlackmojiContainer', () => {
  const defaultProps = {
    bitmojis: mockBitmojiList.solo,
    showSelector: false,
    toggleSelector: jest.fn()
  }

  describe('when passed bitmoji props', () => {
    it('renders BitmojiList, DisplayButtons and SearchField', () => {
      const component = renderWithRouter(
        <SlackmojiContainer {...defaultProps} />
      )

      expect(component.find(DisplayButtons)).toHaveLength(1)
      expect(component.find(SearchField)).toHaveLength(1)
      expect(component.find(BitmojiList)).toHaveLength(1)
    })
  })

  describe('when passed empty bitmoji props', () => {
    it('renders NoResults, DisplayButtons and SearchField', () => {
      const component = renderWithRouter(
        <SlackmojiContainer {...defaultProps} bitmojis={[]} />
      )

      expect(component.find(DisplayButtons)).toHaveLength(1)
      expect(component.find(SearchField)).toHaveLength(1)
      expect(component.find(NoResults)).toHaveLength(1)
    })
  })

  describe('when passed a false showSelector prop', () => {
    it('does not render BitmojiSelector ', () => {
      const component = renderWithRouter(
        <SlackmojiContainer {...defaultProps} />
      )

      expect(component.find(BitmojiSelector)).toHaveLength(0)
    })
  })

  describe('when passed a true showSelector prop', () => {
    it('renders BitmojiSelector', () => {
      const component = renderWithRouter(
        <SlackmojiContainer {...defaultProps} showSelector />
      )

      expect(component.find(BitmojiSelector)).toHaveLength(1)
    })
  })
})

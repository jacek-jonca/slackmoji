import React from 'react'

import BitmojiTag from '../components/BitmojiTag'
import { renderWithRouter } from '../helpers/__mocks__'
import { canCopy, copyToClipboard } from '../helpers/'

jest.mock('../helpers')

describe('BitmojiTag', () => {
  describe('initial render', () => {
    it('renders a link and a copy tooltip', () => {
      const component = renderWithRouter(
        <BitmojiTag tag='firefly' />
      )

      expect(component.find('a')).toHaveLength(1)
      expect(component.find('a').props().href).toBe('solo#firefly')
      expect(component.find('img')).toHaveLength(1)
      expect(component.text()).toMatch(/Copy to Clipboard/)
    })
  })

  describe('when canCopy is false', () => {
    beforeEach(() => canCopy.mockReturnValue(false))

    it('hides the copy tooltip', () => {
      const component = renderWithRouter(
        <BitmojiTag tag='firefly' />
      )

      expect(component.find('.hide')).toHaveLength(1)
      expect(component.find('.tooltip')).toHaveLength(0)
    })
  })

  describe('on clicking the clipboard icon', () => {
    beforeEach(() =>
      copyToClipboard.mockImplementation()
    )

    it('calls copy to clipboard', () => {
      const component = renderWithRouter(
        <BitmojiTag tag='firefly' />
      )

      component.find('img').simulate('click')
      expect(copyToClipboard).toHaveBeenCalledTimes(1)
    })
  })
})

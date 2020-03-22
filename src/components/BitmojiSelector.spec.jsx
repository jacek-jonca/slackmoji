import React from 'react'
import { renderWithRouter } from '../helpers/__mocks__'

import BitmojiSelector from './BitmojiSelector'


describe('BitmojiSelector', () => {
  const defaultProps = {
    changeBitmojiId: jest.fn(),
    isDefaultBitmoji: true,
    toggleSelector: jest.fn()
  }

  describe('initial render', () => {
    it('renders an input, button and tooltip', () => {
      const component = renderWithRouter(
        <BitmojiSelector {...defaultProps} />
      )

      expect(component.find('input')).toHaveLength(1)
      expect(component.find('button')).toHaveLength(1)
      expect(component.find('img')).toHaveLength(1)
      expect(component.find('.tooltip')).toHaveLength(1)
    })
  })

  describe('button text', () => {
    describe('when there is no url and bitmoji is not the default', () => {
      it('has button text `Reset`', () => {
        const component = renderWithRouter(
          <BitmojiSelector {...defaultProps} isDefaultBitmoji={false} />
        )

        expect(component.find('button').text()).toMatch(/Reset/)
      })
    })

    describe('when the bitmoji is the default', () => {
      it('has button text `Submit`', () => {
        const component = renderWithRouter(
          <BitmojiSelector {...defaultProps} />
        )

        expect(component.find('button').text()).toMatch(/Submit/)
      })
    })

    describe('when the bitmoji is not default and the url changes from empty', () => {
      it('changes button text from `Submit` to `Reset`', () => {
        const component = renderWithRouter(
          <BitmojiSelector {...defaultProps} isDefaultBitmoji={false} />
        )

        expect(component.find('button').text()).toMatch(/Reset/)

        component.find('input').simulate('change', { target: { value: 'zorp' } })

        expect(component.find('button').text()).toMatch(/Submit/)
      })
    })
  })

  describe('submit handler', () => {
    beforeEach(() => jest.clearAllMocks())

    describe('when the url is valid', () => {
      it('calls changeBitmojiId and toggleSelector', () => {
        const component = renderWithRouter(
          <BitmojiSelector {...defaultProps} />
        )
        const value = 'https://render.bitstrips.com/v2/cpanel/0eab647b-90ee-412d-8d6e-85088ccd46b1-bce3df56-bbd7-4215-b639-163a8d53ae73-v1.png?transparent=1&palette=1'

        component.find('input').simulate('change', { target: { value } })
        component.find('button').simulate('click')
        expect(defaultProps.changeBitmojiId).toHaveBeenCalledTimes(1)
        expect(defaultProps.toggleSelector).toHaveBeenCalledTimes(1)
      })
    })


    describe('when the url is invalid', () => {
      it('calls a window alert and no prop callbacks', () => {
        const component = renderWithRouter(
          <BitmojiSelector {...defaultProps} />
        )
        window.alert = jest.fn()

        component.find('input').simulate('change', { target: { value: 'zorp' } })
        component.find('button').simulate('click')
        expect(defaultProps.changeBitmojiId).toHaveBeenCalledTimes(0)
        expect(defaultProps.toggleSelector).toHaveBeenCalledTimes(0)
        expect(window.alert).toHaveBeenCalledTimes(1)
      })
    })
  })
})

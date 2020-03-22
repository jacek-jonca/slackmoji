import React from 'react'

import SearchField from './SearchField'
import { renderWithRouter } from '../helpers/__mocks__'
import { generateUrl } from '../helpers'

jest.mock('../helpers')

describe('SearchField', () => {
  describe('initial render', () => {
    it('renders an input and a button', () => {
      const component = renderWithRouter(<SearchField />)

      expect(component.find('input')).toHaveLength(1)
      expect(component.find('button')).toHaveLength(1)
    })
  })

  describe('change handlers', () => {
    it('changes the input value prop', () => {
      const component = renderWithRouter(<SearchField />)

      component.find('input').simulate('change', { target: { value: 'boba tea' } })
      expect(component.find('input').prop('value')).toBe('boba tea')
    })
  })

  describe('search handler', () => {
    beforeEach(() => {
      jest.clearAllMocks()
      generateUrl.mockReturnValue('/friends#swim')
    })

    it('calls generateUrl', () => {
      const component = renderWithRouter(<SearchField />)

      component.find('button').simulate('click')
      expect(generateUrl).toHaveBeenCalledTimes(1)
    })

    it('updates the history object', () => {
      const component = renderWithRouter(<SearchField />)

      component.find('button').simulate('click')
      expect(component.prop('history').push).toHaveBeenCalledWith('/friends#swim')
    })
  })

  describe('key press handler', () => {
    beforeEach(() => {
      jest.clearAllMocks()
      generateUrl.mockImplementation()
    })

    describe('when key is `enter`', () => {
      it('calls generateUrl', () => {
        const component = renderWithRouter(<SearchField />)

        component.find('input').simulate('keypress', { key: 'Enter' })
        expect(generateUrl).toHaveBeenCalledTimes(1)
      })
    })

    describe('when key is not `enter`', () => {
      it('does not call generateUrl', () => {
        const component = renderWithRouter(<SearchField />)

        component.find('input').simulate('keypress', { key: 'Esc' })
        expect(generateUrl).toHaveBeenCalledTimes(0)
      })
    })
  })
})

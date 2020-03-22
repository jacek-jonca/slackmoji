import React from 'react'

import DisplayButtons, { DisplayButton } from './DisplayButtons'
import { renderWithRouter } from '../helpers/__mocks__'
import { generateUrl } from '../helpers'

jest.mock('../helpers')

describe('DisplayButtons', () => {
  describe('initial render', () => {
    it('renders two display buttons', () => {
      const component = renderWithRouter(<DisplayButtons />)

      expect(component.find('input')).toHaveLength(2)
      expect(component.find(DisplayButton).at(0).text()).toBe('Solo')
      expect(component.find(DisplayButton).at(1).text()).toBe('Friends')
    })
  })

  describe('click handler', () => {
    beforeEach(() => {
      jest.clearAllMocks()
      generateUrl.mockReturnValue('/friends#swim')
    })

    it('calls generateUrl', () => {
      const component = renderWithRouter(<DisplayButtons />)

      component.find('input').at(1).simulate('change')
      expect(generateUrl).toHaveBeenCalledTimes(1)
    })

    it('updates the history object', () => {
      const component = renderWithRouter(<DisplayButtons />)

      component.find('input').at(1).simulate('change')
      expect(component.prop('history').push).toHaveBeenCalledWith('/friends#swim')
    })
  })
})

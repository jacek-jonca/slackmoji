import React from 'react'

import Header from './Header'
import { renderWithRouter } from '../helpers/__mocks__'
import { canCopy, copyToClipboard, useScreenResize } from '../helpers/'

jest.mock('../helpers')

describe('Header', () => {
  beforeEach(() => jest.clearAllMocks())

  const defaultProps = {
    showSelector: true,
    toggleSelector: jest.fn()
  }

  describe('initial render', () => {
    describe('when on desktop', () => {
      it('renders two headers and two buttons', () => {
        const component = renderWithRouter(
          <Header {...defaultProps} />
        )

        expect(component.find('h1')).toHaveLength(1)
        expect(component.find('h3')).toHaveLength(1)
        expect(component.find('button')).toHaveLength(2)
      })
    })

    describe('when on mobile', () => {
      beforeEach(() => {
        useScreenResize.mockReturnValue(true)
        canCopy.mockReturnValue(true)
      })

      it('renders one header and two hidden buttons', () => {
        const component = renderWithRouter(
          <Header {...defaultProps} />
        )

        expect(component.find('h1')).toHaveLength(1)
        expect(component.find('h3.hide')).toHaveLength(1)
        expect(component.find('button.hide')).toHaveLength(2)
      })
    })

    describe('when browser can\'t copy', () => {
      beforeEach(() => {
        useScreenResize.mockReturnValue(false)
        canCopy.mockReturnValue(false)
      })

      it('renders two headers and two hidden buttons', () => {
        const component = renderWithRouter(
          <Header {...defaultProps} />
        )

        expect(component.find('h1')).toHaveLength(1)
        expect(component.find('h3')).toHaveLength(1)
        expect(component.find('button.hide')).toHaveLength(2)
      })
    })
  })

  describe('click handlers', () => {
    describe('when copy button is clicked', () => {
      it('calls copyToClipboard', () => {
        const component = renderWithRouter(
          <Header {...defaultProps} />
        )

        const button = component.find('button').at(0)
        button.simulate('click')
        expect(copyToClipboard).toHaveBeenCalledTimes(1)
      })
    })

    describe('when bitmoji selector button is clicked', () => {
      it('calls toggleSelector', () => {
        const component = renderWithRouter(
          <Header {...defaultProps} />
        )

        const button = component.find('button').at(1)
        button.simulate('click')
        expect(defaultProps.toggleSelector).toHaveBeenCalledTimes(1)
      })
    })
  })

  describe('bitmoji selector button text', () => {
    describe('when selector is shown', () => {
      it('has text `Hide Bitmoji Selector`', () => {
        const component = renderWithRouter(
          <Header {...defaultProps} />
        )

        const button = component.find('button').at(1)
        expect(button.text()).toMatch(/Hide Bitmoji Selector/)
      })
    })

    describe('when the selector is not shown', () => {
      it('has text `Use My Bitmoji`', () => {
        const component = renderWithRouter(
          <Header {...defaultProps} showSelector={false} />
        )

        const button = component.find('button').at(1)
        expect(button.text()).toMatch(/Use My Bitmoji/)
      })
    })
  })
})


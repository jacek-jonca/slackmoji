import React from "react"
import { shallow } from "enzyme"

import { useScreenResize, useUrlParams } from './'
import { renderWithRouter } from './__mocks__'

describe('custom hooks', ()  => {
  const HookWrapper = props => <div hook={props.hook ? props.hook() : undefined} />
  let component

  describe('useScreenResize', () => {
    describe('when the window is wider than the width limit', () => {
      it('returns false', () => {
        window = Object.assign(window, { innerWidth: 1080 })
        component = shallow(
          <HookWrapper hook={() => useScreenResize()} />
        )

        const { hook } = component.find('div').props()
        expect(hook).toBe(false)
      })
    })

    describe('when the window is less wide than the width limit', () => {
      it('returns true', () => {
        window = Object.assign(window, { innerWidth: 480 })
        component = shallow(
          <HookWrapper hook={() => useScreenResize()} />
        )

        const { hook } = component.find('div').props()
        expect(hook).toBe(true)
      })
    })
  })

  describe('useUrlParams', () => {
    it('returns the display and search data from the url params', () => {
      component = renderWithRouter(
        <HookWrapper hook={() => useUrlParams()} />
      )
      const { hook: { display, search } } = component.find('div').props()

      expect(display).toBe('solo')
      expect(search).toBe('smile')
    })
  })
})

import React from 'react'
import { act } from 'react-dom/test-utils';
import wait from 'waait'

import App from './App'
import Error from './components/Error'
import Header from './components/Header'
import Loader from './components/Loader'
import SlackmojiContainer from './containers/SlackmojiContainer'
import { getBitmoji } from './helpers'
import { mockBitmojiList, renderWithRouter } from './helpers/__mocks__'

jest.mock('./helpers')

describe('App', () => {
  let component

  describe('initial render', () => {
    beforeEach(() =>
      getBitmoji.mockImplementation(
        () => Promise.resolve(mockBitmojiList)
      )
    )

    it('renders Header and Loader', async () => {
      await act(async () => {
        component = renderWithRouter(<App />)
      })

      expect(component.find(Header)).toHaveLength(1)
      expect(component.find(Loader)).toHaveLength(1)
    })
  })

  describe('when bitmoji data has been fetched', () => {
    beforeEach(() =>
      getBitmoji.mockImplementation(
        () => Promise.resolve(mockBitmojiList)
      )
    )

    it('renders Header and SlackmojiContainer', async () => {
      await act(async () => {
        component = renderWithRouter(<App />)
        await wait(0)
        component.update()
      })

      expect(component.find(Header)).toHaveLength(1)
      expect(component.find(SlackmojiContainer)).toHaveLength(1)
    })
  })

  describe('when bitmoji data errors on fetch', () => {
    beforeEach(
      () => getBitmoji.mockImplementation(
        () => Promise.reject(null)
      )
    )

    it('renders Header and Error', async () => {
      await act(async () => {
        component = renderWithRouter(<App />)
        await wait(0)
        component.update()
      })

      expect(component.find(Header)).toHaveLength(1)
      expect(component.find(Error)).toHaveLength(1)
    })
  })
})

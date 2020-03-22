const canCopy = jest.fn()

const copyToClipboard = jest.fn()

const DEFAULT_BITMOJI = 'DAGOBAH'

const filterBitmojis = data => data

const generateUrl = jest.fn()

const getBitmoji = jest.fn()

const imageSrc = jest.fn()

const sortBySearch = data => data

const useScreenResize = jest.fn()

const useScrollListeners = jest.fn()

const useUrlParams = () => ({ display: 'solo', search: 'smile' })

export {
  canCopy,
  copyToClipboard,
  DEFAULT_BITMOJI,
  filterBitmojis,
  generateUrl,
  getBitmoji,
  imageSrc,
  sortBySearch,
  useScreenResize,
  useScrollListeners,
  useUrlParams
}
export { mockBitmojiList } from './mockBitmojiList'
export { renderWithRouter, shallowWithRouter } from './mockRouter'

import { filterBitmojis, sortBySearch } from './'
import { mockBitmojiList } from './__mocks__'

describe('bitmoji filter helpers', () => {
  const bitmojiArray = mockBitmojiList.solo

  describe('filterBitmojis', () => {
    describe('when there are bitmojis matching the search term', () => {
      it('returns the bitmojis with matching tags', () => {
        const results = filterBitmojis(bitmojiArray, 'yay')
        const result_ids = results.map(result => result.comic_id)
        expect(results.length).toBe(2)
        expect(result_ids).toContain("9319680")
      })
    })

    describe('when there are no bitmojis matching the search term', () => {
      it('returns an empty array', () => {
        const results = filterBitmojis(bitmojiArray, 'zaz')
        expect(results.length).toBe(0)
      })
    })

    describe('when the search term is an empty string', () => {
      it('returns all the bitmojis', () => {
        const results = filterBitmojis(bitmojiArray, '')
        const result_ids = results.map(result => result.comic_id)
        expect(results.length).toBe(4)
        expect(result_ids).toContain("9319680")
      })
    })
  })

  describe('sortBySearch', () => {
    const { tags } = bitmojiArray[0]

    describe('when the search term is included in the tags', () => {
      it('returns the matching tags first', () => {
        const results = sortBySearch(tags, '<3')
        expect(results.length).toBe(4)
        expect(results[0]).toBe('<3')
      })
    })

    describe('when the search term is not included in the tags', () => {
      it('returns the tags in the original order', () => {
        const results = sortBySearch(tags, 'l33t')
        expect(results).toStrictEqual(tags)
      })
    })

    describe('when the search term is an empty string', () => {
      it('returns the tags in the original order', () => {
        const results = sortBySearch(tags, '')
        expect(results).toStrictEqual(tags)
      })
    })
  })
})


import { DEFAULT_BITMOJI, generateUrl, getBitmojiId, validateUrl } from './'

describe('url helpers', () => {
  const validUrl = 'https://render.bitstrips.com/v2/cpanel/0eab647b-90ee-412d-8d6e-85088ccd46b1-bce3df56-bbd7-4215-b639-163a8d53ae73-v1.png?transparent=1&palette=1'
  const invalidUrl = 'https://www.xkcd.com/'

  describe('generateUrl', () => {
    it('returns a path containing a display and search', () => {
      expect(generateUrl('friends', 'nachos')).toBe('friends#nachos')
    })
  })

  describe('getBitmojiId', () => {
    describe('when the url is a valid bitstrips url', () => {
      it('returns the bitmoji id', () => {
        const bitmojiId = 'bce3df56-bbd7-4215-b639-163a8d53ae73'
        expect(getBitmojiId(validUrl)).toBe(bitmojiId)
      })
    })

    describe('when the url is an invalid bitstrips url', () => {
      it('returns the default bitmoji id', () => {
        expect(getBitmojiId(invalidUrl)).toBe(DEFAULT_BITMOJI)
      })
    })

    describe('when the url is an empty string', () => {
      it('returns the default bitmoji id', () => {
        expect(getBitmojiId('')).toBe(DEFAULT_BITMOJI)
      })
    })
  })

  describe('validateUrl', () => {
    describe('when the url is a valid bitstrips url', () => {
      it('returns true', () => {
       expect(validateUrl(validUrl)).toBe(true)
      })
    })

    describe('when the url is an invalid bitstrips url', () => {
      it('returns false', () => {
        expect(validateUrl(invalidUrl)).toBe(false)
      })
    })

    describe('when the url is an empty string', () => {
      it('returns true', () => {
        expect(validateUrl('')).toBe(true)
      })
    })
  })
})


const imageSrc = (src, bitmojiId) => {
  const url = src.replace(/%s/g, bitmojiId)
  return url + '&width=200'
}

const getParams = url => {
  const splitURL = url.split(/\//)
  const path = splitURL[splitURL.length - 1]
  return path.split(/\./)[0]
}

const getBitmojiId = url => {
  const params = getParams(url)
  const codeArr = params.split(/-/)
  const length = codeArr.length
  return codeArr.slice(length - 6, length - 1).join('-')
}

const validateURL = url => {
  const regexp = new RegExp('(render.bitstrips.com/v2/cpanel/)+[A-Za-z0-9-]+(v1.png)')
  return regexp.test(url)
}

const copyToClipboard = text => {
  navigator.permissions.query({name: 'clipboard-write'})
  .then(({state}) => {
    if (state === 'granted' || state === 'prompt') {
      navigator.clipboard.writeText(text)
    }
  })
}

const updateBitmojiId = url => {
  const newBitmojiId = getBitmojiId(url)
  localStorage.setItem('bitmojiId', newBitmojiId)
  return newBitmojiId
}

const resetBitmojiId = () => {
  const newBitmojiId  = process.env.REACT_APP_BITMOJI_ID
  localStorage.removeItem('bitmojiId')
  return newBitmojiId
}

const generateURL = (display, search) => `${display}#${encodeURI(search)}`

export {
  copyToClipboard,
  generateURL,
  imageSrc,
  resetBitmojiId,
  updateBitmojiId,
  validateURL
}

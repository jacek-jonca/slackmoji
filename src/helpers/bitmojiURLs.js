const imageSrc = (src, bitmojiId) => {
  const url = src.replace(/%s/g, bitmojiId)
  return url + '&width=200'
}

const getBitmojiId = (url) => {
  const params = getParams(url)
  const codeArr = params.split(/-/)
  const length = codeArr.length
  return codeArr.slice(length - 6, length - 1).join('-')
}

const getParams = (url) => {
  const splitURL = url.split(/\//)
  const path = splitURL[splitURL.length - 1]
  return path.split(/\./)[0]
}

const validateURL = (url) => {
  const regexp = new RegExp('(render.bitstrips.com/v2/cpanel/)+[A-Za-z0-9-]+(v1.png)')
  return regexp.test(url)
}

export {imageSrc, getBitmojiId, validateURL}

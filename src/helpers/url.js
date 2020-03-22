const DEFAULT_BITMOJI = process.env.REACT_APP_BITMOJI_ID

const canCopy = () => !!navigator.permissions

const copyToClipboard = text => {
  if (navigator.permissions) {
    navigator.permissions.query({name: 'clipboard-write'})
    .then(({state}) => {
      if (state === 'granted' || state === 'prompt') {
        navigator.clipboard.writeText(text)
      }
    })
  }
}

const generateUrl = (display, search) => `${display}#${encodeURI(search)}`

const imageSrc = (src, bitmojiId = DEFAULT_BITMOJI) =>
  src.replace(/%s/g, bitmojiId).concat('&width=200')

const BITMOJI_REGEX = new RegExp(
  /render\.bitstrips\.com\/v2\/cpanel\/[0-9a-fA-F-]+([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})-v1\.png/
)

const validateUrl = url => !url || BITMOJI_REGEX.test(url)

const getBitmojiId = url => {
  const match = url.match(BITMOJI_REGEX)
  return match ? match[1] : DEFAULT_BITMOJI
}

export {
  canCopy,
  copyToClipboard,
  DEFAULT_BITMOJI,
  imageSrc,
  generateUrl,
  getBitmojiId,
  validateUrl
}

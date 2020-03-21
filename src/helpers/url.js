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

const BITMOJI_REGEX = new RegExp(
  /render\.bitstrips\.com\/v2\/cpanel\/[0-9a-fA-F-]+([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})-v1\.png/
)

const getBitmojiId = url => url.match(BITMOJI_REGEX)[1]

const validateUrl = url => {
  return !url || BITMOJI_REGEX.test(url)
}

export {
  canCopy,
  copyToClipboard,
  generateUrl,
  getBitmojiId,
  validateUrl
}

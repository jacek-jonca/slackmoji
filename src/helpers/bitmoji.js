const filterBitmojis = (bitmojis, search) => {
  return bitmojis.filter(bitmoji => bitmojiMatches(bitmoji, search))
}

const bitmojiMatches = (bitmoji, search) => {
  return bitmoji.tags.some(tag => tagMatches(tag, search))
}

const tagMatches = (tag, search) => {
  return tag.toLowerCase().includes(search.toLowerCase()) 
}

const sortBySearch = (tags, search) => {
  if (!search) return tags

  const tagsArr = []
  tags.forEach(tag => {
    if (tagMatches(tag, search)) {
      tagsArr.unshift(tag)
    } else {
      tagsArr.push(tag)
    }
  })
  return tagsArr
}

const imageSrc = (src, bitmojiId) => {
  const url = src.replace(/%s/g, bitmojiId)
  return url + '&width=200'
}

const getBitmojiId = (url) => {
  const params = getParams(url)
  const codeArr = params.split(/-/)
  return codeArr.slice(5, 10).join('-')
}

const getParams = (url) => {
  const splitURL = url.split(/\//)
  const path = splitURL[splitURL.length - 1]
  return path.split(/\./)[0]
}


export {sortBySearch, imageSrc, filterBitmojis, getBitmojiId}

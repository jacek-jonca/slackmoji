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

const imageSrc = (src) => {
  const url = src.replace(/%s/g, process.env.REACT_APP_BITMOJI_ID)
  return url + '&width=200'
}


export {sortBySearch, imageSrc, filterBitmojis}

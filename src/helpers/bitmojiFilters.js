const filterBitmojis = (bitmojis, search) => {
  if (search) {
    return bitmojis.filter(bitmoji => bitmojiMatches(bitmoji, search))
  } else {
    return bitmojis
  }
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

export { sortBySearch, filterBitmojis }

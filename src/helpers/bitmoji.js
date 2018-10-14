const filterTags = (tags) => {
  const filteredTags = tags.map(tag => tag.replace(/\*/, ''))
  sortByLength(filteredTags)
  return [...new Set(filteredTags)]
}

const sortByLength = (tags) => {
  tags.sort()
  return tags.reverse()
}

const imageSrc = (src) => {
  const url = src.replace(/%s/g, process.env.REACT_APP_BITMOJI_ID)
  return url + '&width=200'
}


export {filterTags, imageSrc}

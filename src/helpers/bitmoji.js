const filterTags = (tags) => {
  const filteredTags = tags.map(tag => tag.replace(/\*/, ''))
  return [...new Set(filteredTags)]
}

const imageSrc = (src) => {
  const url = src.replace(/%s/g, process.env.REACT_APP_BITMOJI_ID)
  return url + '&width=200'
}

export {filterTags, imageSrc}

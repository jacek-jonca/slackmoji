const filterTags = (tags) => {
  const filteredTags = tags.map(tag => tag.replace(/\*/, ''))
  return [...new Set(filteredTags)]
}

const splitTags = (tags) => {
  const filteredTags = filterTags(tags)
  const mid = Math.ceil(filteredTags.length/2)
  const tags1 = filteredTags.slice(0, mid)
  const tags2 = filteredTags.slice(mid)
  return {tags1, tags2}
}

const imageSrc = (src) => {
  const url = src.replace(/%s/g, process.env.REACT_APP_BITMOJI_ID)
  return url + '&width=200'
}

export {splitTags, imageSrc}
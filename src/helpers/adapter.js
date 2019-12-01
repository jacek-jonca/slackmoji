const getSlackmoji = () => {
  const url = process.env.REACT_APP_API_URL
  return fetch(url)
    .then(r => r.json())
    .then(r=> r.body)
}

export { getSlackmoji }

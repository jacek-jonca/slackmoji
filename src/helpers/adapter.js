const getBitmoji = async () => {
  const url = process.env.REACT_APP_API_URL
  const resp = await fetch(url)
  const json = await resp.json()
  return json.body
}

export { getBitmoji }

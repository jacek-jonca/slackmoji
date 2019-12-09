const copyToClipboard = text => {
  navigator.permissions.query({name: "clipboard-write"})
  .then(({state}) => {
    if (state === "granted" || state === "prompt") {
      navigator.clipboard.writeText(text)
    }
  })
}

const searchFromParams = (setSearch) => {
  const {hash} = window.location
  const searchParam = hash.slice(1).replace('%20', ' ')
  setSearch(searchParam)
}

export {copyToClipboard, searchFromParams}

import React, { useState, useEffect } from 'react';
import Header from './components/Header'
import Loader from './components/Loader'
import SlackmojiContainer from './containers/SlackmojiContainer'
import { getSlackmoji } from './helpers/adapter'


const App = () => {
  const [loading, setLoading]     = useState(true)
  const [solo, setSolo]           = useState([])
  const [friends, setFriends]     = useState([])
  const gridClass = loading ? 'load-screen' : 'container'

  useEffect(() => {
    getSlackmoji()
    .then(resp => {
      setSolo(resp.solo)
      setFriends(resp.friends)
      setLoading(false)
    })
  }, [])

  return (
    <div className={gridClass}>
      <Header />
      { loading
        ? <Loader />
        : <SlackmojiContainer
            solo={solo}
            friends={friends}
          />
      }
    </div>
  )
}

export default App

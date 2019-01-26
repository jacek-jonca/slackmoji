import React, { useState, useEffect } from 'react';
import Loader from './components/Loader'
import SlackmojiContainer from './containers/SlackmojiContainer'
import { getSlackmoji } from './helpers/adapter'


const App = (props) => {
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
      <div className='header center-text'>
        <h1>
          SlackMoji
        </h1>
        <h3>
          What fun new Bitmojis can I use in Slack?
        </h3>
      </div>
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

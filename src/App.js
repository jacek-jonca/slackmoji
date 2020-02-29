import React, { useState, useEffect } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Loader from './components/Loader'
import SlackmojiContainer from './containers/SlackmojiContainer'
import { getSlackmoji } from './helpers/adapter'
import { filterBitmojis } from './helpers/bitmojiFilters'
import { useURLParams } from './helpers/customHooks'

const App = () => {
  const [loading, setLoading] = useState(true)
  const [bitmojis, setBitmojis] = useState([])
  const [showSelector, setShowSelector] = useState(false)
  const gridClass = loading ? 'load-screen' : 'container'
  const { display, search } = useURLParams()

  useEffect(() => {
    getSlackmoji()
    .then(resp => {
      if (resp.solo) {
        setBitmojis(resp)
      }
      setLoading(false)
    }).catch(() => setLoading(false))
  }, [])

  const renderContainer = () => {
    if (loading) {
      return <Loader />
    } else {
      const filteredBitmojis = filterBitmojis(bitmojis[display], search)
      return (
        <SlackmojiContainer
          bitmojis={filteredBitmojis}
          showSelector={showSelector}
          toggleSelector={toggleSelector}
        />
      )
    }
  }

  const toggleSelector = () => setShowSelector(prevShowSelector => !prevShowSelector)

  return (
    <div className={gridClass}>
      <Header showSelector={showSelector} toggleSelector={toggleSelector} />
      <Switch>
        <Route path='/solo'>
          { renderContainer() }
        </Route>
        <Route path='/friends'>
          { renderContainer() }
        </Route>
        <Route path='/'>
          <Redirect to='/solo'/>
        </Route>
      </Switch>
    </div>
  )
}

export default App

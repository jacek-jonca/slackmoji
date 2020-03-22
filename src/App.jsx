import React, { useEffect, useState } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Error from './components/Error'
import Header from './components/Header'
import Loader from './components/Loader'
import SlackmojiContainer from './containers/SlackmojiContainer'
import { filterBitmojis, getBitmoji, useUrlParams } from './helpers'

const App = () => {
  const [bitmojis, setBitmojis] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [showSelector, setShowSelector] = useState(false)
  const { display, search } = useUrlParams()
  const gridClass = (loading || error) ? 'load-screen' : 'container'

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getBitmoji()
        if (data.solo) {
          setBitmojis(data)
        } else {
          new Error()
        }
      } catch {
        setError(true)
      }
      setLoading(false)
    }
    fetchData()
  }, [])


  const renderContainer = () => {
    if (error) {
      return <Error />
    } else if (loading) {
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

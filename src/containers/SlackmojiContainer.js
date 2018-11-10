import React, { Component, Fragment } from 'react'
import DisplayControls from '../containers/DisplayControls'
import BitmojiList from './BitmojiList'
import NoResults from '../components/NoResults'
import debounce from '../helpers/debounce'
import {filterBitmojis} from '../helpers/bitmojiFilters'
import {getBitmojiId} from '../helpers/bitmojiURLs'

export default class SlackmojiContainer extends Component {
  state = {
    display: 'solo',
    search: '',
    bitmojiId: process.env.REACT_APP_BITMOJI_ID
  }

  componentDidMount() {
    const bitmojiId = localStorage.getItem('bitmojiId')
    if (bitmojiId) {
      this.setState({bitmojiId})
    }
  }

  changeDisplay = (e) => {
    const display = e.target.value
    this.setState({display})
  }

  changeSearch = (search) => {
    this.setState({search})
  }
  
  changeBitmojiId = (url) => {
    let bitmojiId
    if (url) {
      bitmojiId = getBitmojiId(url)
      localStorage.setItem('bitmojiId', bitmojiId)
    } else {
      bitmojiId = process.env.REACT_APP_BITMOJI_ID
      localStorage.removeItem('bitmojiId')
    }
    this.setState({bitmojiId})
  }

  filterBitmojis() {
    const {display, search} = this.state
    const bitmojis = this.props[display]

    if (!search) return bitmojis
    return filterBitmojis(bitmojis, search)
  }

  render() {
    const bitmojis = this.filterBitmojis()
    const defaultBitmoji = process.env.REACT_APP_BITMOJI_ID === this.state.bitmojiId

    return (
      <Fragment>
        <DisplayControls
          display={this.state.display}
          changeDisplay={this.changeDisplay}
          changeSearch={debounce(this.changeSearch, 500)}
          changeGrid={this.props.changeGrid}
          changeBitmojiId={this.changeBitmojiId}
          search={this.state.search}
          defaultBitmoji={defaultBitmoji}
        />
        { !!bitmojis.length 
          ? <BitmojiList
              bitmojis={bitmojis}
              bitmojiId={this.state.bitmojiId}
              changeSearch={this.changeSearch}
              search={this.state.search}
            />
          : <NoResults /> 
        }
      </Fragment>
    )
  }
}
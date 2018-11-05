import React, { Component, Fragment } from 'react'
import DisplayControls from '../containers/DisplayControls'
import BitmojiList from './BitmojiList'
import NoResults from '../components/NoResults'
import debounce from '../helpers/debounce'
import {filterBitmojis, getBitmojiId} from '../helpers/bitmoji'

export default class SlackmojiContainer extends Component {
  state = {
    display: 'solo',
    search: '',
    bitmojiId: process.env.REACT_APP_BITMOJI_ID
  }

  changeDisplay = (e) => {
    const display = e.target.value
    this.setState({display})
  }

  changeSearch = (search) => {
    this.setState({search})
  }
  
  changeBitmojiId = (e) => {
    e.preventDefault()
    let bitmojiId
    if (e.target.value) {
      bitmojiId = getBitmojiId(e.target.value)
    } else {
      bitmojiId = process.env.REACT_APP_BITMOJI_ID
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

    return (
      <Fragment>
        <DisplayControls
          display={this.state.display}
          changeDisplay={this.changeDisplay}
          changeSearch={debounce(this.changeSearch, 500)}
          changeBitmojiId={this.changeBitmojiId}
          search={this.state.search}
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
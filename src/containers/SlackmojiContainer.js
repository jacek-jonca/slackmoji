import React, { Component, Fragment } from 'react'
import DisplayControls from '../containers/DisplayControls'
import BitmojiList from './BitmojiList'
import NoResults from '../components/NoResults'
import debounce from '../helpers/debounce'
import {filterBitmojis} from '../helpers/bitmoji'

export default class SlackmojiContainer extends Component {
  state = {
    display: 'solo',
    search: ''
  }

  changeDisplay = (e) => {
    const display = e.target.value
    this.setState({display})
  }

  changeSearch = (search) => {
    this.setState({search})
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
          search={this.state.search}
        />
        { !!bitmojis.length 
          ? <BitmojiList
              bitmojis={bitmojis}
              changeSearch={this.changeSearch}
              search={this.state.search}
            />
          : <NoResults /> 
        }
      </Fragment>
    )
  }
}
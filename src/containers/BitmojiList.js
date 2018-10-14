import React, {Component} from 'react'
import BitmojiCard from '../components/BitmojiCard'

export default class BitmojiList extends Component {
  state = {count: 100}
  scrollY = 0

  componentDidMount() {
    document.addEventListener('scroll', this.loadMoreItems)
  }

  loadMoreItems = () => {
    const moreBitmojis = this.state.count < this.props.bitmojis.length
    const scrollDown = window.pageYOffset || document.documentElement.scrollTop

    if (moreBitmojis && (this.scrollY < scrollDown)) {
      this.setState(prevState => ({count: prevState.count + 100}))
    } else {
      document.removeEventListener('scroll', this.loadMoreItems)
    }
  }

  displayBitmojis() {
    const bitmojis = this.props.bitmojis.slice(0, this.state.count)
    return bitmojis.map(b => <BitmojiCard bitmoji={b} key={b.comic_id} />)
  }

  render() {
    return (
      <ul
      className='bitmoji-list flex wrap center'
      key='bitmoji-list'
      ref='list'
      >
      { this.displayBitmojis() }
      </ul>
    )
  }
}
import React from 'react'
import BitmojiCard from '../components/BitmojiCard'

export default class BitmojiList extends React.Component {
  state = {count: 100}


  componentDidMount() {
    const {scrollTop, clientHeight, scrollHeight} = this.refs.list
    document.addEventListener('scroll', this.loadMoreItems)
  }

  loadMoreItems = () => {
    if (this.state.count < this.props.bitmojis.length) {
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
    const {bitmojis} = this.props
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
import React, {Component} from 'react'
import BitmojiCard from '../components/BitmojiCard'

export default class BitmojiList extends Component {
  state = {count: 100}
  scrollY = 0

  componentDidMount() {
    document.addEventListener('scroll', this.loadMoreItems)
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.loadMoreItems)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.bitmojis.length === this.props.bitmojis.length) return

    if (prevState.count > 100) {
      this.setState({count: 100})
    }
  }

  loadMoreItems = () => {
    const moreBitmojis = this.state.count < this.props.bitmojis.length
    const scrollDown = window.pageYOffset || document.documentElement.scrollTop

    if (moreBitmojis && (this.scrollY < scrollDown)) {
      this.setState(prevState => ({count: prevState.count + 50}))
    }
  }

  render() {
    const bitmojis = this.props.bitmojis.slice(0, this.state.count)
    return (
      <ul
      className='bitmoji-list flex wrap center'
      key='bitmoji-list'
      ref='list'
      >
      { bitmojis.map(b => (
        <BitmojiCard
          bitmoji={b}
          changeSearch={this.props.changeSearch}
          key={b.comic_id}
        />)
      )}
      </ul>
    )
  }
}
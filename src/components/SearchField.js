import React, {Component} from 'react'

export default class SearchField extends Component {
  constructor(props) {
    super(props)
    this.state = {search: props.search}
  }

  handleSearch = ({target: {value}}) => {
    this.setState({search: value})
    this.props.changeSearch(value)
  }

  componentDidUpdate(prevProps, prevState) {
    const newSearchProp = this.props.search !== prevProps.search
    const sameSearchState = this.state.search === prevState.search

    if (newSearchProp && sameSearchState) {
      this.setState({search: this.props.search})
    }
  }

  render() {
    return(
      <input className='search margin-m'
        type='text'
        name='search'
        value={this.state.search}
        onChange={this.handleSearch}
        placeholder='Search for keywords'
      />
    )
  }
}


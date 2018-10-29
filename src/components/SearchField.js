import React, {Component} from 'react'

export default class SearchField extends Component {

  handleSearch = ({target: {value}}) => {
    this.props.changeSearch(value)
  }

  render() {
    return(
      <input className='search margin-m'
        type='text'
        name='search'
        value={this.props.search}
        onChange={this.handleSearch}
        placeholder='Search for keywords'
      />
    )
  }
}


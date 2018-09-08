import React, {Component} from 'react'

export default class SearchField extends Component {
  state = {search: ''}

  handleChange = (e) => {
    e.persist()
    const search = e.target.value
    this.setState({search})
    this.props.changeDisplay(e)
  }

  render() {
    return(
      <div>
        <input
          type='text'
          name='search'
          onChange={this.handleChange}
        />
      </div>
    )
  }
}


import React, {Fragment, Component} from 'react'
import DisplayRadio from '../components/DisplayRadio'
import SearchField from '../components/SearchField'
import BitmojiURLField from '../components/BitmojiURLField'

export default class DisplayControls extends Component {
  state = {
    showURLField: false,
  }
  
  toggleURLField = () => {
    this.setState(prevState => {
      return {showURLField: !prevState.showURLField}
    }, () => {
      const {showURLField} = this.state
      const gridClass = showURLField ? 'container-with-url' : 'container'
      this.props.changeGrid(gridClass)
    })
  }
  
  render() {
    const {
      display,
      changeDisplay,
      changeSearch,
      changeBitmojiId,
      search,
      defaultBitmoji
    } = this.props

    return (
      <Fragment>
        <DisplayRadio
          display={display}
          changeDisplay={changeDisplay}
        />
        <SearchField
          changeSearch={changeSearch}
          search={search}
        />
        <div className='bitmoji-selector center-self margin-m'>
          <button className='btn' onClick={this.toggleURLField}>
            { this.state.showURLField
              ? 'Hide URL Field'
              : 'Use My Bitmoji'
            }
          </button>
        </div>
        
        {this.state.showURLField &&
          <BitmojiURLField
            toggleURLField={this.toggleURLField}
            changeBitmojiId={changeBitmojiId}
            defaultBitmoji={defaultBitmoji}
          />
        }
      </Fragment>
    )
  }
}
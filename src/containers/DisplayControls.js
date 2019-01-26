import React, { Fragment, useState } from 'react'
import DisplayRadio from '../components/DisplayRadio'
import SearchField from '../components/SearchField'
import BitmojiURLField from '../components/BitmojiURLField'

const DisplayControls = ({
  display,
  changeDisplay,
  changeSearch,
  changeBitmojiId,
  search,
  defaultBitmoji
}) => {
  const [showURLField, setShowURLField] = useState(false)
  
  const toggleURLField = () => {
    setShowURLField(prevShowURLField => !prevShowURLField)
  }
  
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
        <button className='btn' onClick={toggleURLField}>
          { showURLField
            ? 'Hide URL Field'
            : 'Use My Bitmoji'
          }
        </button>
      </div>
      
      { showURLField &&
        <BitmojiURLField
          toggleURLField={toggleURLField}
          changeBitmojiId={changeBitmojiId}
          defaultBitmoji={defaultBitmoji}
        />
      }
    </Fragment>
  )
}

export default DisplayControls

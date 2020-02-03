import React, { useState } from 'react'
import DisplayRadio from '../components/DisplayRadio'
import SearchField from '../components/SearchField'
import BitmojiURLField from '../components/BitmojiURLField'

const DisplayControls = ({
  changeBitmojiId,
  defaultBitmoji
}) => {
  const [showURLField, setShowURLField] = useState(false)

  const toggleURLField = () => {
    setShowURLField(prevShowURLField => !prevShowURLField)
  }

  return (
    <>
      <DisplayRadio />
      <SearchField />
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
    </>
  )
}

export default DisplayControls

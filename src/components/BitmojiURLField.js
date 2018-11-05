import React, {Component, Fragment} from 'react'

export default ({changeBitmojiId, toggleURLField}) => {
  return (
    <Fragment>
      <form onSubmit={changeBitmojiId} className=''>
        <input 
          className='margin-m'
          type='text'
          placeholder='Enter URL of any image starring your Bitmoji'
        />
        <input className='btn' type='submit'/>
      </form>
    </Fragment>
  )
} 

// export default class BitmojiURLField extends Component {
//   state = {url: ''}
// 
//   changeHandler = ({target: {value}}) => {
//     this.setState({url: value})
//   }
// 
//   render() {
//     return(
//       <form onSubmit={this.props.changeURL}>
//         <input className='search margin-m' onChange={changeHandler}
//           type='text'
//           value={this.state.url}
//           placeholder='Enter URL of any image starring your Bitmoji'
//         />
//         <input type='submit'/>
//       </form>
//     )
//   }
// }

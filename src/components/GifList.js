import React, {Component} from 'react'

class GifList extends Component {
  render(){
    return(
      <div className='image'>
        <img src = {this.props.gif.images.original.url} className='picture'></img>
      </div>
    )
  }
}

export default GifList;
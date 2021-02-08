import React, {Component} from 'react'

class GifSearch extends Component {
  render(){
    return(
      <div>
         <form onSubmit={this.props.handleSubmit}>
          <h3>Enter a Search Term!</h3>
          <input type="text" name="search" className="input-text" />
          <br/>
          <input type="submit" name="submit" value="Find Gifs" className="submit"/>
        </form>
      </div>
    )
  }
}

export default GifSearch;
import React, {Component} from 'react'

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {
 
  state = {
    gifs: [],
    search: ""
  }

  async componentDidMount(){
    const res = await fetch("https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g")
    const data = await res.json()
    this.setState({gifs: data.data})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({search: event.target.search.value})
    event.target.reset();
  }
  

  render(){
    // this.state.gifs ? this.state.gifs.map(gif=> console.log(gif.title)) : null
    let printGifs = this.state.gifs ? this.state.gifs.filter(gif => gif.title.toLowerCase().includes(this.state.search.toLowerCase())) : []
    printGifs =  printGifs.slice(0,3)
    console.log(printGifs)
    console.log(printGifs)
    return(
      <div className='row'>
        <div className="column">
          {printGifs.map(gif=> <li> <GifList key={gif.id} gif={gif}/> </li>)}
        </div>
        <div className="column">
          <GifSearch handleSubmit={this.handleSubmit} />
        </div>
      </div>
    )
  }
}

export default GifListContainer;
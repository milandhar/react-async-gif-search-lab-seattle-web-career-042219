import React, { Component } from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component{

  constructor(){
    super()
    this.state = {
      topGifs: []
    }
  }

  addGifs = (json) => {
    let displayGifs = json.data.slice(0,3)
    this.setState({
      topGifs: displayGifs
    })
  }

  submit = (query) => {

    fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(res => res.json())
    .then(result => this.addGifs(result))
  }

  render(){
    return(
      <div>
        <GifList gifArray={this.state.topGifs}/>
        <GifSearch handleSubmit={this.submit}/>
      </div>
    )
  }


}

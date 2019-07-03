import React, { Component } from 'react';

export default class GifList extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <ul>
        {this.props.gifArray.map((gif, idx) => {
          return (<li key={idx}><img src={gif.images.original.url}></img></li>)
        })}
      </ul>
    )
  }

}

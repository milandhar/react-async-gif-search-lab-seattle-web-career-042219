import React, { Component } from 'react';

export default class GifSearch extends Component{
  constructor(props){
    super(props)

    this.state = {
      textInput: ""
    }
  }


    handleSubmit = () => {

    }

    handleChange = (ev) => {
      console.log(ev)
      this.setState({
        textInput: ev.target.value
      })
    }

    handleClick = (ev) => {
      ev.preventDefault()
      let query = this.state.textInput
      this.props.handleSubmit(query)
    }

    render(){
      return(
        <form onSubmit={this.handleSubmit}>
          <label>
            Search:
            <input value={this.state.textInput} type="text" onChange={this.handleChange} />
          </label>
            <input onClick={this.handleClick} type = "submit" />
        </form>
      )
    }

  }

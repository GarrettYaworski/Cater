import React, { Component } from 'react'


export default class Home extends Component{
  constructor(){
    super()

    this.state = {
      stuff: []
    }
  }

  render(){
    return(
      <div>
        Home Page
      </div>
    )
  }
}
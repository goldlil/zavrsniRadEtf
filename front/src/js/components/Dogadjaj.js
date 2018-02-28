import React from 'react'

export default class Dogadjaj extends React.Component{

    constructor(props){
        super(props);
        console.log("usao");
    }

  render() {
    return (
      <div>
        <h2>{this.props.params.id}</h2>
      </div>
    )
  }
}
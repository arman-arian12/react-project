import React, { Component } from 'react'

 class index1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count:0
    }
  }
  hendelhooks=()=>{
    this.setState({
      count:this.state.count +1
    })
  }
  render() {
    const {count}=this.state
    return (
      <div>
        <h1>count:{count}</h1>
        <button onClick={this.hendelhooks}>incrimeent</button>
      </div>
    )
  }
}
export default index1
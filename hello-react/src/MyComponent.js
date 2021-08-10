import React,{ Component } from "react";

class MyComponent extends Component {
  render(){
    return (
      <div>
        Hi, my name is {this.props.name}.
      </div>
    )
  }
}
export default MyComponent;
import React,{Component} from "react";
import MyComponent from "./MyComponent"; // new Component load

class App extends Component {
  render(){
    return (
      <div>
        <h1>Hello react !</h1>
        <MyComponent name = "Ons"/>
      </div>
    )
  }

}

export default App;
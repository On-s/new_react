import React,{Component} from 'react';
import MyComponent from "./MyComponent"; // new Component load
import EventPractice from "./EventPractice";

class App extends Component {
  render(){
    return (
      <div>
        <h1>Hello react !</h1>
        <MyComponent name = 'On' age = {5} />
        <EventPractice/>
      </div>
    )
  }

}

export default App;
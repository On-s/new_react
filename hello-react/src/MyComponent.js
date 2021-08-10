import React,{ Component } from "react";
import PropTypes from "prop-types";

class MyComponent extends Component {
  static defaultProps = {
    neme : '기본 이름'
  }
  static propTypes = {
    name : PropTypes.string,
    age : PropTypes.number.isRequired
  }
  constructor(props) {
    super(props);
    this.state = {
      number : 0
    }
  }
  render(){
    return (
      <div>
        Hi, my name is {this.props.name}.
        <p>im {this.props.age} years old.</p>
        <p>number : {this.state.number}</p>
        <button onClick={() => {
          this.setState({
            number : this.state.number +5
          });
        }}>
        </button>
        
        <button onClick={()=> {
          this.setState({
            number : 0
          })
        }}>

        </button>
      </div>
    )
  }
}
export default MyComponent;
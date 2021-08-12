import React ,{ Component } from "react";
import './ValidationSample.css';

class ValidationSample extends Component {
  state = {
    password = '',
    clicked : false,
    validated : false
  };

  handleChange = (e) => {
    this.setState({
      password : e.target.value
    })
  };

  handleButtonClick = () => {
    this.setState({
      clicked : true,
      validated : this.state.value === '0000'
    })
  }
}
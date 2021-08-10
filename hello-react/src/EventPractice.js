import React,{Component} from 'react';

class EventPractice extends Component {
  state = {
    message : ''
  }

  handleChange = (e) => {
    this.setState({
      message : e.target.value
    })
  }

  handClick = () => {
    alert(this.state.message)
    this.setState({
      message : ''
    })
  }
  render(){
    return(
      <div>
        <h1>study Event</h1>
        <input
        type = 'text'
        name = 'message'
        placeholder = '아무거나 입력하시오'
        value = {this.state.message}
        onChange={this.handleChange}
        />
        <button onClick={this.handClick}>확인</button>
      </div>
    )
  }
}

export default EventPractice;
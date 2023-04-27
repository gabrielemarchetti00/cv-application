import React, { Component } from "react";
import General from "./components/GeneralInfo";
import Practice from "./components/PracticalInfo";
import Edu from "./components/EduInfo";
import "./styles/style.css"

class App extends Component {
  constructor() {
    super()

    this.state = {
      name: {
        text: ''
      },
    };
  }

  handleChange = (e) => {
    this.setState({
      name: {
        text: e.target.value,
      },
    });
  };

  render() {
    const {name} = this.state

    return (
      <div className='container'>
        <div className='forms'>
          <div className="general-container">
            <form onSubmit={this.onSubmitGen}>
              <div>
                  <label htmlFor="name-input">Name </label>
                  <input type='text' onChange={this.handleChange} value={name.text} id="name-input"></input>
              </div>
            </form>
          </div>
          <div className="edu-container"></div>
          <div className="practice-container"></div>
        </div>
        <div className='cv'>
          <div className="gen-info">
            <General name={name}/>
          </div>
          <div className="edu-info">
            <Edu/>
          </div>
          <div className="pra-info">
            <Practice />
          </div>
        </div>
      </div>
    )
  }
}

export default App;

import React, { Component } from "react";
import General from "./components/GeneralInfo";
import Practice from "./components/PracticalInfo";
import Edu from "./components/EduInfo";
import "./styles/style.css"

class App extends Component {
  constructor() {
    super()

    this.state = {
      name: {text: ''},
      email: {text: ''},
      phone: {text: ''},
      school: {text: ''},
      title: {text: ''},
      sdate: {text: ''},
      edate: {text: ''},
      company: {text: ''},
      position: {text: ''},
      tasks: {text: ''},
      sdateJob: {text: ''},
      edateJob: {text: ''},
    };
  }

  handleChange = (e) => {
    switch(e.target.id) {
      case 'name-input': {
        this.setState({
          name: {text: e.target.value}
        })
        break;
      }
      case 'email-input': {
        this.setState({
          email: {text: e.target.value}
        })
        break;
      }
      case 'phone-input': {
        this.setState({
          phone: {text: e.target.value}
        })
        break;
      }
      case 'school-input': {
        this.setState({
          school: {text: e.target.value}
        })
        break;
      }
      case 'title-input': {
        this.setState({
          title: {text: e.target.value}
        })
        break;
      }
      case 'sdate-input': {
        this.setState({
          sdate: {text: e.target.value}
        })
        break;
      }      
      case 'edate-input': {
        this.setState({
          edate: {text: e.target.value}
        })
        break;
      }
      case 'company-input': {
        this.setState({
          company: {text: e.target.value}
        })
        break;
      }
      case 'position-input': {
        this.setState({
          position: {text: e.target.value}
        })
        break;
      }
      case 'tasks-input': {
        this.setState({
          tasks: {text: e.target.value}
        })
        break;
      }
      case 'sdate-input-job': {
        this.setState({
          sdateJob: {text: e.target.value}
        })
        break;
      }      
      case 'edate-input-job': {
        this.setState({
          edateJob: {text: e.target.value}
        })
        break;
      }
    }
  };

  onClickAddEdu = () => {
    let newForm = (<div>ciao</div>)
    console.log(newForm)
  }

  render() {
    const {name, email, phone, school, title, sdate, edate, company, position, tasks, sdateJob, edateJob} = this.state

    return (
      <div className='container'>
        <div className='forms'>
          <div className="general-container">
            <div><h2>General info</h2></div>
            <form>
              <div>
                  <label htmlFor="name-input">Name </label>
                  <input type='text' onChange={this.handleChange} value={name.text} id="name-input"></input>
              </div>
              <div>
                  <label htmlFor="email-input">Email </label>
                  <input type='email' onChange={this.handleChange} value={email.text} id="email-input"></input>
              </div>
              <div>
                  <label htmlFor="phone-input">Phone number </label>
                  <input type='number' onChange={this.handleChange} value={phone.text} id="phone-input"></input>
              </div>
            </form>
          </div>
          <div className="edu-container">
            <div><h2>Education</h2></div>
            <form>
              <div>
                  <label htmlFor="school-input">School name </label>
                  <input type='text' onChange={this.handleChange} value={school.text} id="school-input"></input>
              </div>
              <div>
                  <label htmlFor="title-input">Title of study </label>
                  <input type='text' onChange={this.handleChange} value={title.text} id="title-input"></input>
              </div>
              <div>
                  <label htmlFor="sdate-input">Start date </label>
                  <input type='date' onChange={this.handleChange} value={sdate.text} id="sdate-input"></input>
                  <label htmlFor="edate-input">End date </label>
                  <input type='date' onChange={this.handleChange} value={edate.text} id="edate-input"></input>
              </div>
            </form>
            <button onClick={this.onClickAddEdu}>Add</button>
            <button>Delete</button>
            <div>
              {this.newForm}
            </div>
          </div>
          <div className="practice-container">
            <div><h2>Practice</h2></div>
            <form>
              <div>
                  <label htmlFor="company-input">Company name </label>
                  <input type='text' onChange={this.handleChange} value={company.text} id="company-input"></input>
              </div>
              <div>
                  <label htmlFor="position-input">Position title </label>
                  <input type='text' onChange={this.handleChange} value={position.text} id="position-input"></input>
              </div>
              <div>
                  <label htmlFor="tasks-input">Main tasks </label>
                  <input type='text' onChange={this.handleChange} value={tasks.text} id="tasks-input"></input>
              </div>
              <div>
                  <label htmlFor="sdate-input-job">Start date </label>
                  <input type='date' onChange={this.handleChange} value={sdateJob.text} id="sdate-input-job"></input>
                  <label htmlFor="edate-input-job">End date </label>
                  <input type='date' onChange={this.handleChange} value={edateJob.text} id="edate-input-job"></input>
              </div>
            </form>
          </div>
        </div>
        <div className='cv'>
          <div className="gen-info">
            <h2>CV preview: </h2>
            <General name={name} email={email} phone={phone}/>
          </div>
          <div className="edu-info">
            <h4>Education</h4>
            <Edu school={school} title={title} sdate={sdate} edate={edate}/>
          </div>
          <div className="pra-info">
            <h4>Jobs</h4>
            <Practice company={company} position={position} tasks={tasks} sdateJob={sdateJob} edateJob={edateJob} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;

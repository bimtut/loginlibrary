import React from 'react';
import './App.css';
import Homepage from "../src/pages/homepage"
import { Route,  BrowserRouter as Router } from 'react-router-dom'
import Data from './data'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      regisShow: false,
      loginShow: false,
      regSuccesShow: false,
      regFailedShow: false,
      logFailedShow: false,
      addBookShow: false,
      addBookSuccess: false,
      donateBookShow: false,
      donateBookSuccess: false,
      search:'',
      Data

    }
  }

// login button
showLogin = () => {
  this.setState({loginShow: true})
}
hideLogin = () => {
    this.setState({
        loginShow: false,
        regisShow: false
    })
}
// regis button
showRegis = () => {
    this.setState({regisShow: true})
}
hideRegis = () => {
    this.setState({
        regisShow: false,
        loginShow: false
    })
}
// add button
showAddBook = () => {
    this.setState({
        addBookShow: true
    })
}
hideAddBook = () => {
    this.setState({
        addBookShow: false
    })
}
// donate button
showDonate = () => {
    this.setState({
        donateBookShow: true
    })
}
hideDonate = () => {
    this.setState({
        donateBookShow: false
    })
}

setSearch = (kucing) => {
    this.setState({ search: kucing })
}

  
  render() {
    return (
      <div className="App">
        <Homepage showaaLogin={this.showLogin} showRegis={this.showRegis} kartolo={this.showAddBook} openDonate={this.state.donateBookShow} setSearchtul={this.setSearch} prop={this.state} search={this.state.search} openRegis={this.state.regisShow} onCloseRegis={this.hideRegis} onCloseLogin={this.hideLogin} openLogin={this.state.loginShow} openAdd={this.state.addBookShow} onCloseAdd={this.hideAddBook} onCloseDonate={this.hideDonate} openRegSuc={this.state.regSuccesShow} opeRegFail={this.state.regFailedShow} openLogFail={this.state.logFailedShow}/>
      </div>
    )
  }
}



export default App;

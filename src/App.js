import React from 'react'
import logo from './logo.svg';
import './App.css';
import Signup from './Components/Signup/Signup'
import Login from "./Components/Login/Login"
import Greeting from './Components/Greeting/Greeting';

class App extends React.Component{

  constructor(){
    super()
    this.state = {
      is_user_logged_in: false
    }
  }

  sayGreeting = (data) => {
    // this.setState({
    //   is_user_logged_in: true
    // })

    // this.setState({
    //   is_user_logged_in: true
    // }, function(){
    //   alert("state changed")
    // })

    // this.setState(function(prevState, props){
  
    // })


    

  }

  render(){
    let greeting = "Welcome to App User"
    if(this.state.is_user_logged_in){
        greeting = "Welcome James"
    }

    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greeting greeting={greeting} />
        <Login username="jamesuser" password="password" greeting={this.sayGreeting}></Login>
        <Signup />
      </header>
    </div>
    )

  }



}

export default App
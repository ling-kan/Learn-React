import React, {Component} from "react" //conditional - can only use one type of react


//Conditional Rendering - Log in and log out 
class LogIn extends React.Component {
  constructor(){
    super()
    this.state = {
      isLoggedIn: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(id){
    this.setState(prevState => {
      return {
        isLoggedIn : !prevState.isLoggedIn
      }
    })
  }
  
  render(){
    let buttonText = this.state.isLoggedIn ? "LOG OUT" : "LOG IN"
  
    let displayText = this.state.isLoggedIn ? "Logged In ": "Logged Out"

    return(
      <div className="form">
        <button onClick={this.handleClick}>{buttonText}</button>
        <h1>{displayText}</h1>
      </div>
    )
  }
}
export default LogIn

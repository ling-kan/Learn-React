import React, {Component} from "react"

class counterButton extends React.Component{
  constructor(){
    super()
     this.state = {count: 0}
     this.handleClick = this.handleClick.bind(this)
  }
   handleClick(){
     this.setState(prevState => {
        return {
          count: prevState.count + 1
          }
        })
     }
    
        render() {
         return(
           <div>
             <p>Task 2:38 </p>
             <h1> {this.state.count}</h1>
             <button onClick={this.handleClick}>Change!</button>
             <p> Unsure of ChildComponent count={this.state.count}/></p>
    
           </div>
         )
        }
      }
      export default counterButton
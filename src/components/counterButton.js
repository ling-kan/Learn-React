import React from "react"

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
           <div className="form">
             <h2> Counter </h2>
             <h1> {this.state.count}</h1>
             <button onClick={this.handleClick}>Change!</button>

           </div>
         )
        }
      }
      export default counterButton
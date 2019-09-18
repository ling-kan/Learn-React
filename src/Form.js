import React, {Component} from "react"
import FormComponent from "./formComponent"

class Form extends Component {

    constructor(){
      super()

    ///everytime the value changes in the input box
     this.state = {
      firstname:"",
      lastname: "",
      isFriendly: true, //Start wit the checkbx being checked
      age: "",
      gender: "", 
      destination: "",
      isVegan: false, 
      isKosher: false,
      isLactoseFree: false
      
    }
    this.handleChange = this.handleChange.bind(this)
  }

  

      
  handleChange(event){
    const {name, value, type,checked} = event.target
   // this.setState({
     // instead of writing a new handleChange event for every input
     // add a name sectin into the form, and get the target value of this

    // is the type equal to checkbox if so update state in a certain way (access checked - to whatever the value of checked is)
    type === "checkbox" ? 
        this.setState({
              [name]:checked
            })
        : 
        this.setState({
          [name]:value
        })
        
       //   {[name]:checked}) : this.setState({[name]: value})
     //[event.target.name]: event.target.value
  }
 render(){
     return(
     <FormComponent
        handleChange={this.handleChange}
        data={this.state}/> 
     )
 }
}
export default Form
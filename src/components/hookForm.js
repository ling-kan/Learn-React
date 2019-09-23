import React, {useState} from "react";

function HookForm (callback){
// Use state hook to initialise a state variable
    const [inputs, setInputs] = useState({});
    //The handler that controls forms submission
    //Submit event 
     //Wait until all reuired inputs are filled by the user 
    //When te user cicks on the butotn it will trigger the submit event 
    //when the user types something in an input field it will store the calue in a state variable 
    const handleSubmit = (event) => {
      if (event) {
        alert('User Created! \nName: '+  inputs.firstName +' ' + inputs.lastName + '\nEmail Address: ' + inputs.email ); 

        event.preventDefault();
      }
      // a function that gets cllback whenever it gets ccalled, or whenever the user submits the form 
      callback();
    }
    //the handler that hanges the input elements value
    const handleInputChange = (event) => {
      event.persist();
      //use setInput function from the hook to update the inputs 
      setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
    }
   
     return (
        <form className = "form" onSubmit={handleSubmit} >
            <h1>Hook Form </h1>
            <div>
          <label>First Name</label>
            <input type="text" name="firstName" onChange={handleInputChange} value={inputs.firstName} required />
            <label>Last Name</label>
            <input type="text" name="lastName" onChange={handleInputChange} value={inputs.lastName} required />
        </div>
        <div>
            <label>Email Address</label>
            <input type="email" name="email" onChange={handleInputChange} value={inputs.email} required />
        </div>
        <div>
            <label>Password</label>
            <input type="password" name="password1" onChange={handleInputChange} value={inputs.password1}/>
        </div>
        <div>
            <label>Re-enter Password</label>
            <input type="password" name="password2" onChange={handleInputChange} value={inputs.password2}/>
        </div>
        <button type="submit">Sign Up</button>
        </form>
    ) 
}
export default HookForm
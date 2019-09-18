import React from "react"

function FormComponent(props){

    return (

        

      <form>
      <h2> Form Title </h2>
      <p>My Name:{props.data.firstName} {props.data.lastName}</p>
      <p>Age: {props.data.age}</p>
      <p>My Gender:{props.data.gender}</p>
      <p>My destination: {props.data.destination}</p>
      <p>My dietary restrctions: <br/>
          Vegan: {props.data.isVegan ? "Yes" : "No"}<br/>
          Kosher: {props.data.isKosher ? "Yes" : "No"}<br/>
          Lactose Free: {props.data.isLactoseFree ? "Yes" : "No"}<br/>
        
         </p>
        <input type="text" value={props.data.firstName} name="firstName" placeholder="First Name" onChange={props.handleChange}/>
        <br /> 
        <input type="text"  value={props.data.lastName} name="lastName" placeholder="Last Name" onChange={props.handleChange}/>
        <br />
        <input type="text"  value={props.data.age} name="age" placeholder="Age" onChange={props.handleChange}/>
        <br/>
      <textarea value ={"Some default value"}/> 

      <label>
      <input type="checkbox"
             name="isFriendly"
             checked={props.data.isFriendly}
             onChange={props.handleChange}
            /> Is Friendly?
      </label>

      <label>
         <br/>
      <input type="radio"
             name="gender"
             value="male"
             checked={props.data.gender === "male"}
             onChange={props.handleChange}
            />Male 
      </label>
      <label>
      <input type="radio"
             name="gender"
             value="female"
             checked={props.data.gender === "female"}
             onChange={props.handleChange}
            />Female
      </label>
    <br/>
      <select 
          value ={props.data.destination}
          name="destination"
          onChange={props.handleChange}
          >
            <option value="">---Please Choose a destination!---</option>
            <option value="germany">Germany</option>
            <option value="norway">Norway</option>
            <option value="france">France</option>
            <option value="spain">Spain</option>
       </select>
      <br/>
      <label>
        <input 
            type="checkbox"
            name="isVegan"
            onChange={props.handleChange}
            checked={props.data.isVegan}
            />Vegan
      </label>
      <label>
        <input 
            type="checkbox"
            name="isKosher"
            onChange={props.handleChange}
            checked={props.data.isKosher}
            />Kosher
      </label>
      <label>
        <input 
            type="checkbox"
            name="isLactoseFree"
            onChange={props.handleChange}
            checked={props.data.isLactoseFree}
            />Lactose Free
      </label>
      
      </form>
    )
  }

  export default FormComponent
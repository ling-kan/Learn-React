import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


// // STORE -> GLOBALIEZED STATE 

// //ACTION INCREMENT - descibes the action you want to do 
// // a function that resturns an object
// const increment =() => {
//     return{
//         type:'INCREMENT' // what is your action name
//     }
// }
// const decrement =() => {
//     return{
//         type:'DECREMENT' // what is your action name
//     }
// }

// //REDUCER 
// //
// const counter = (state = 0,action) => {
//     switch(action.type){ //based on the name of the action name its going to do something
//     case "INCREMENT":
//         return state + 1;
//     case "DECREMENT":
//         return state - 1;
//     }
// }

// let store = createStore(counter);
// //Display it in the console
// store.subscribe(()=> console.log(store.getState()));
    
// //DISPATCH
// store.dispatch(increment());
// store.dispatch(decrement());

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

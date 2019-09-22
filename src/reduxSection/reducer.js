// define logic 
// lilne of code for reducer file which is repsoinsble for updating the state in Redux
// import {increment, decrement} from './action'


// Reducer - how the app functions - state changes 


// export default (state = 0, action) => {
  const reducer =  (state = 0, action) => {
    switch (action.type) {
      case 'increase':
        return state + 1;
      case 'decrease':
        return state - 1;
      default:
        return state;
    }
  }
  
  export default reducer;

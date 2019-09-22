//Create a store 
//Initial State
import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(counter)

export default store;

// const App = () => (
//   <Provider store={store}>
//     <Counter/>
//   </Provider>
// );

// Takes current state and an action to then return a new state
// function reducer(state, action) {
//     return{
//         count: 42
//     };
//   }
  
//   const store = createStore(reducer);
// action (container type, payload)
// eg delete or update, add 
// define actions - actions that are  javascript objects that have a type
// following the actions creators respoinsble for creating an action
export const increase = 'increase';
export const decrease = 'decrease';


export function increaseCounter() {
    return ({ type: increase});
  }
  
  export function decreaseCounter() {
    return ({ type: decrease});
  }
  

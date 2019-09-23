import React from 'react';
import { connect } from 'react-redux'
import {increaseCounter, decreaseCounter, increase, decrease} from './actions';

class CounterRedux extends React.Component {
 render(){
      const { counter, increase, decrease } = this.props;
    
      return(
            <div className = "form">
               <h1> Redux Counter</h1>
                <div>Counter : {counter}</div>
                <div>
               <button onClick = {increase}>increase BY 1</button>
            </div>
            <div>
               <button onClick = {decrease}>decrease BY 1</button>
            </div>
            </div>
        );
    }

}
// container componenent, with providign redux state and react componenetn
// calls everytime the store state changes, recives the entiner stre state 
// should return an object of data this componenet needs   
function mapStateToProps (state) {
    return {
       counter: state
    };
 };

// a way to trigger a state change 
 function mapDispatchToProps (dispatch) {
   console.log(increase);
   console.log(typeof increase);
  return {
    increase: () => dispatch(increaseCounter()),
    decrease: () => dispatch(decreaseCounter())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterRedux);

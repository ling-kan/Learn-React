//import React from 'react';
import React, {Component} from "react" //conditional - can only use one type of react
import ReactDOM from 'react-dom';
import logo from './logo.svg';

import './App.css';
import './style.css'; //todo

import Form from "./components/Form"
import DateTime from './components/DateTime'; //todo
import Conditional from './components/Conditional';
import FetchinDataAPI from "./components/fetchingDataAPI";
import CounterButton from "./components/counterButton";
import LogIn from "./components/logIn";
import TodoMain from "./components/todoMain";
import Clock from "./components/clock";
import LifeCycle from "./components/lifeCycle";

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import ReduxToDo from "./reduxSection"; //App with componenets
import reducer from './reduxSection/reducer'

import HookCounter from "./components/hookCounter"
import HookForm from "./components/hookForm"


const store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && 
  window.__REDUX_DEVTOOLS_EXTENSION__()
)
//CombineReducers turns an object with the values into reducing functions into a single reducing fucntion so it can be passed to createStore

//Forms - Container/Componenent Architecture 
function App(){

  return(
    <div>
    <DateTime/>   
    <LogIn/>     
    <Form/>
    <FetchinDataAPI/>
    <CounterButton/>
    <TodoMain/>
    <Clock />
    <Provider store={store}>
        <ReduxToDo/>
    </Provider>
    <HookCounter/>
    <HookForm/>
   </div>
  )
}
export default App;
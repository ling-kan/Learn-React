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

import {combineReducers} from 'react-redux'; 
//CombineReducers turns an object with the values into reducing functions into a single reducing fucntion so it can be passed to createStore
import Store from './reduxSection/store'
import Counter from './reduxSection/containers/counter.js';


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
    <combineReducers Store={Store}>
      <Counter />
    </combineReducers>

   {/* //  <Counter store={store}/>  */}
    {/* <LifeCycle/> */}
   </div>
  )
}
export default App;
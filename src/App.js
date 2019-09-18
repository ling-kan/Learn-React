//import React from 'react';
import React, {Component} from "react" //conditional - can only use one type of react
import ReactDOM from 'react-dom';


import logo from './logo.svg';
import './App.css';
import './style.css'; //todo

import Form from "./components/Form"
import DateTime from './components/dateTime'; //todo
import Conditional from './components/Conditional';
import FetchinDataAPI from "./components/fetchingDataAPI";
import CounterButton from "./components/counterButton";
import LogIn from "./components/logIn";
import TodoMain from "./components/todoMain";

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
   </div>
  )
}
export default App;

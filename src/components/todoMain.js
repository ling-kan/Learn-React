
import TodoItem from './todoItem'; //todo
import todoData from './todoData'; //todo
import React, {Component} from "react"

class todoMain extends React.Component {
  constructor(){
    super()
    this.state={
      todos: todoData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id){
      console.log("Changed", id)

      this.setState(prevState => {
        const updatedTodos = prevState.todos.map(todo => {
          if(todo.id === id){
            todo.completed = !todo.completed
          }
          return todo
        })
        return{
          todos: updatedTodos
        }
      })
  }
  
  render(){
    const todoItems = todoData.map(item => <TodoItem key={item.id} item={item}/>)

    return(
    
      <div className = "form"> 
       {todoItems}
      </div>
    )
  }
}

export default todoMain
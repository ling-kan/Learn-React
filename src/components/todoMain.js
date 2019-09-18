
import TodoItem from './todoItem'; //todo
import todoData from './todoData'; //todo
import React from "react"

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
    const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)

    return(
    
      <div className = "form"> 
      <h2> To do List</h2>
       {todoItems}
      </div>
    )
  }
}

export default todoMain
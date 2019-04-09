import React, { Component } from 'react';
import Todos from './componentes/Todos';
import Header from './componentes/layout/header';
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id : 1,
        title : 'Take out the trash',
        completed: true
      },
      {
        id : 2,
        title : 'Dinner with my GF',
        completed: false
      },
      {
        id : 3,
        title : 'Fuck of the boss',
        completed: false
      }
    ]
  }

  // Toggle Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo
    }) })
  }

  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
  }


  render() {
    // console.log(this.state.todos)
    return (
      <div className="App">
      <Header/>
       <Todos todos={this.state.todos} markComplete={this.markComplete}  delTodo={this.delTodo}/>
      </div>
    );
  }
}

export default App;

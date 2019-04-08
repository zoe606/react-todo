import React, { Component } from 'react';
import Todos from './componentes/Todos';
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

  markComplete = (id) => {
    console.log(id)
  }


  render() {
    // console.log(this.state.todos)
    return (
      <div className="App">
       <Todos todos={this.state.todos} markComplete={this.markComplete} />
      </div>
    );
  }
}

export default App;

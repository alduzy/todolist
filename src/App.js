import React, { Component } from 'react';
import AddTask from './AddTask';
import TaskList from './Tasklist';
import './App.css';

class App extends Component {
  counter = 0
  state = {
    tasks: []
  }

  handleDone = (id) => {
    const tasks = [...this.state.tasks];
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = !task.active;
        task.doneDate = new Date().getTime()
      }
    })
    this.setState({
      tasks
    })
  }

  handleRemove = (id) => {
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex(task => task.id === id);
    tasks.splice(index, 1);
    this.setState({
      tasks
    })
  }

  addTask = (text, date, important) => {
    const task = {
      id: this.counter,
      text: text,
      date: date,
      important: important,
      active: true,
      doneDate: null
    }
    const tasks = [...this.state.tasks]
    tasks.push(task);
    this.setState({
      tasks
    })
    this.counter++
    return true
  }

  render() {
    return (
      <>
        <div className="App">
          <h1>ToDoApp</h1>
          <AddTask add={this.addTask} />
          <TaskList
            tasks={this.state.tasks}
            done={this.handleDone}
            remove={this.handleRemove}
          />
        </div>
      </>
    );
  }
}

export default App;

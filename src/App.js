import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
// import uuid from 'uuid'; 
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    todos: []
  }

  componentDidMount(){
    axios.get('api/v1/todos')
    .then(res => this.setState({ todos: res.data }))
  }

  // Toggle Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  // Delete todos
  // delTodo = (id) => {
  //   this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id )] })
  // }

	delTodo = (id) => {
		axios
			.delete(`api/v1/todos/${id}`)
			.then((res) =>
				this.setState({
					todos: [...this.state.todos.filter((todo) => todo.id !== id)]
				})
			);
	};

  // Add Todo
  // addTodo = (title) => {
  //   const newTodo = {
  //     id:uuid.v4(),
  //     title: title,
  //     completed: false
  //   }
  //   this.setState({todos: [...this.state.todos, newTodo]})
  // }

  addTodo = (title) => {
    axios.post('api/v1/todos', {
      title,
      completed: false
    })
    .then(res => this.setState({ todos: [...this.state.todos, res.data] }));
  }

  render(){
    // console.log(this.state.todos)
    return (
      <Router>
        <div className="container">
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddTodo addTodo={this.addTodo} />
              <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
            </React.Fragment>
          )}/>
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;

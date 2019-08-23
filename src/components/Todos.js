import React, { Component } from 'react';
import TodoItem from './Todoitem';
import PropTypes from 'prop-types';


class Todos extends Component {

  render(){
		return this.props.todos.map((object) => (
			<TodoItem key={object.id} todo={object} markComplete={this.props.markComplete} delTodo={this.props.delTodo} />
		));
	}
}
// proptypes
Todos.propTypes = {
	todos: PropTypes.array.isRequired,
	markComplete: PropTypes.func.isRequired,
	delTodo: PropTypes.func.isRequired
}



export default Todos;
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Todoitem extends Component {
	
	// Recat if and else
	// getStyle = () => {
	// 	if (this.props.todo.completed){
	// 		return {
	// 			textDecoration: 'line-through'
	// 		}
	// 	}else{
	// 		return {
	// 			textDecoration: 'none'
	// 		}
	// 	}
	// }

	// React turnerry operator
	getStyle = () => {
		return {
			background: '#f4f4f4',
			padding: '10px',
			borderBottom: '1px #ccc dotted',
			textDecoration: this.props.todo.completed? 'line-through' : 'none' 
		}
	}

	// markComplete = (e) =>{
	// 	console.log(this.props.todo)
	// }

	
	render() {
		const { id, title } = this.props.todo;
		return (
			// inline css 
			// <div style={{backgroundColor: '#f4f4f4'}}>
			// <div style={itemStyle}> // variable style
			<div style={this.getStyle()}>
				<p>
					<input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
					{ title }
					<button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>X</button>
				</p>
			</div>
		)
	}
}

// proptypes
Todoitem.propTypes = {
	todo: PropTypes.object.isRequired,
	delTodo: PropTypes.func.isRequired,
	markComplete: PropTypes.func.isRequired 
}

// variable
// const itemStyle = {
// 	backgroundColor: '#f4f4f4'
// }

const btnStyle = {
	background: '#ff0000',
	color: '#fff',
	border: 'none',
	padding: '5px 9px',
	borderRadius: '50%',
	cursor: 'pointer',
	float: 'right'
}


export default Todoitem

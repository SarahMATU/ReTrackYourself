import React from "react";
import './todo.css';
import TodoList from "./todoList";

class Todo extends React.Component {
	
	render() {
		return (
        <div className="App">
            <TodoList/>
    	</div>
		);
	}
}

export default Todo;


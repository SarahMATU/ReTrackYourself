import React from "react";
import { Checkbox } from "@mui/material";
import "./todo.css";

function TodoItem({ todo, deleteTodo, toggleComplete }) {

	function handleChange() {
		toggleComplete(todo.id);
	}

	return (
		<div className={`singleItem ${todo.completed ? 'completed' : ''}`}>
            <div className="check">
                <Checkbox color="error" checked={todo.completed} onChange={handleChange} />
            </div>
            <p className="text">{todo.text}</p>
            <button className="close" onClick={() => deleteTodo(todo.id)}>X</button>
        </div>
        
	);
}

export default TodoItem;

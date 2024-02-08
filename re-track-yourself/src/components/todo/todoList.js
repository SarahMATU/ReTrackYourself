import { useState } from "react";
import React from "react";
import TodoItem from './todoItem';
import { TextField } from "@mui/material";
import './todo.css';

function TodoList() {
    const [todo, setTodo] = useState([
        {
            id: 1, 
            text: 'Study for Exam',
            completed: false
        }
    ]);

    const [text, setText] = useState('');

    function addTodo(text) {
    
        const newTodo = {
            id: Date.now(), 
            text, 
            completed: false
        };

        setTodo([...todo, newTodo]);
        setText('');
    }

    function deleteTodo(id) {
        setTodo(todo.filter(todo => todo.id !== id));
    }

    function toggleComplete(id) {
        setTodo(todo.map(todo => {
            if(todo.id === id) { return {...todo, completed: !todo.completed} }
            else { return todo }
        }))
    }
		return (
			<div className="list">
                <div className="welcome">
                <h1>Todo List</h1>
                    <div className="control">
                        <TextField label="Enter a task" variant="outlined" color="warning" value = {text} onChange={(e) => setText(e.target.value)}/>
				        <button className = "addBtn" onClick={() => addTodo(text)}>Add</button>
                    </div>
                    
                </div>
                
                <div className="todosList">
                    {todo.map((todo, index) => (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            index = {index}
                            deleteTodo={deleteTodo}
                            toggleComplete={toggleComplete}
                        />
                    ))}
                </div>
				
			</div>
		);
}

export default TodoList;
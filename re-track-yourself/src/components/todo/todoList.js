import { useState } from "react";
import React from "react";
import TodoItem from './todoItem'
import './todo.css'

function TodoList() {
    const [todo, setTodo] = useState([
        {
            id:1, 
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
            <div className={'todo-list'}>
                <input
                value={text}
                onChange={e => setText(e.target.value)} 
                />

                <button className={'addBtn'} onClick={() => addTodo(todo)}>Add</button>
                
                {todo.map(todo => (
                    <TodoItem
                    key={todo.id} 
                    todo={todo}
                    deleteTodo={deleteTodo}
                    toggleCompleted={toggleComplete} 
                    />
                ))}
            </div>
        );
}

export default TodoList;
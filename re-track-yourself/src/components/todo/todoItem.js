import React from "react";
import './todo.css'

function TodoItem({todo, deleteTodo, toggleComplete}) {
    function handleChange() {
        toggleComplete(todo.id);
    }

    return (
        <div className={'todo-item'}>
            <input
            type = 'checkbox'
            checked = {todo.completed}
            onChange={handleChange}
            />
            <p>{todo.text}</p>
            <button className={'close'} onClick={() => deleteTodo(todo.id)}>X</button>
        </div>
    );


}

export default TodoItem;
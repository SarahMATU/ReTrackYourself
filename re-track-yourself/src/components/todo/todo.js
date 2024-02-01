import React from "react";
import './todo.css';

class Todo extends React.Component {
	
	render() {
		return (
      <div className="App">
        <div>
            <p>Time Remaining :
                <p id="time"></p> 
            </p>
            <button>Start</button>
            <button>Stop</button>
            <button>On Break</button>
        </div>
			</div>
		);
	}
}

export default Todo;


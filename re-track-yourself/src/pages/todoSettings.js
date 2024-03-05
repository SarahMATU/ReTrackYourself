
import React from "react";
import { Link } from "react-router-dom";
import '../App.css'


class ToDoOption extends React.Component {

	openTodoWindow = () => {
		window.electron.openTodoWindow();
	};

	render() {
		return (
			<div className="App">
				<div className="Body">
					<div className="Widgets">
						<Link className="widgetButton" to='/'>Home</Link>
						<Link className="widgetButton" to='/timerOption'>Timer</Link>
						<Link className="widgetButton" to='/reminderOption'>Reminder</Link>
					</div>
					<div className="InfoSettings">
						<div className="Information">
							<p>The To-Do list allows you to write down tasks that you have to complete</p>
						</div>

						<div className="Settings">
							<button className="addButton" onClick={this.openTodoWindow}>
								Add To-Do Widget
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ToDoOption;

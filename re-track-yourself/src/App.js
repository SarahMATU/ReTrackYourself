import "./App.css";
import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
	openTimerWindow = () => {
		window.electron.openTimerWindow();
	};

	openTodoWindow = () => {
		window.electron.openTodoWindow();
	};

	render() {
		return (
			<div className="App">

				<div className="Header">
					<p>Re-Track Yourself</p>
				</div>

				<div className="Body">
					<div className="Widgets">
						<Link className="Timer" to='/timer'>Timer</Link>
						<Link className="Todo" to='/todo'>To-Do</Link>
						<Link className="Reminder" to='/reminder'>Reminder</Link>
					</div>

					<div className="Settings">
						<p>Click the widget you want to Set</p>
					</div>
				</div>

			<div className="Footer">
				<p>Created By Sarah Mitchell</p>
			</div>
        
		</div>
		);
	}
}

export default Home;

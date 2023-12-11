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
				<div className="Body">
					<div className="Widgets">
						<Link className="Timer" to='/timer'>Timer</Link>
						<Link className="Todo" to='/todo'>To-Do</Link>
						<Link className="Reminder" to='/reminder'>Reminder</Link>
					</div>
					<div>
						<div className="Information">
							<h2>Welcome to Re-Track yourself</h2>
							<p>Start by selecting a widget to use</p>
						</div>

						<div className="Settings">
						</div>
					</div>

				</div>
			</div>
		);
	}
}

export default Home;

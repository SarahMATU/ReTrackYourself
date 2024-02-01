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
						<Link className="widgetButton" to='/timerOption'>Timer</Link>
						<Link className="widgetButton" to='/todoOption'>To-Do</Link>
						<Link className="widgetButton" to='/reminderOption'>Reminder</Link>
					</div>
					<div>
						<div className="Information">
							<h2>Welcome to Re-Track Yourself</h2>
							<h4>Start by selecting a widget to use</h4>
						</div>
					</div>

				</div>
			</div>
		);
	}
}

export default Home;

import "./App.css";
import React from "react";

class App extends React.Component {
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
					<p>Header</p>
				</div>

				<div className="Body">
					<div className="Widgets">

						<div className="Timer">Timer</div>
						<div className="Todo">To-Do</div>
						<div className="Reminder">Reminder</div>
					</div>

					<div className="Settings">

						<p>Set the time you want for this study session</p>
						<div>
							<input type="number"></input>
							<button>Set Time:</button>
						</div>

						<button className="addButton" onClick={this.openTimerWindow}>
							Timer add
						</button>
						<button className="addButton" onClick={this.openTodoWindow}>
							To-Do add
						</button>

					</div>
				</div>

        <div className="Footer">
						<p>Footer</p>
				</div>
        
			</div>
		);
	}
}

export default App;

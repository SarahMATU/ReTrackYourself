
import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
	openReminderWindow = () => {
		window.electron.openReminderWindow();
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

						<p>Set the time you want for this study session</p>
						<div>
							<input type="number"></input>
							<button>Set Time:</button>
						</div>

						<button className="addButton" onClick={this.openReminderWindow}>
							Open Reminder
						</button>

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


import React from "react";
import { Link } from "react-router-dom";
import '../App.css'

class Home extends React.Component {
	openReminderWindow = () => {
		window.electron.openReminderWindow();
	};

	render() {
		return (
			<div className="App">

				<div className="Body">
					<div className="Widgets">
						<Link className="widgetButton" to='/'>Home</Link>
						<Link className="widgetButton" to='/timer'>Timer</Link>
						<Link className="widgetButton" to='/todo'>To-Do</Link>
					</div>

					<div>
						<div className="Information">
							<p>The Reminder sets an alert for you to get up and step away from the computer</p>
						</div>

						<div className="Settings">
							<p>How many times do you want the reminder to go off?</p>
							<div className="sliderSettings">
								<input type="range" list="markers" min='1' max='6'/>

								<datalist id="markers">
									<option value="1" label = '1 Time'></option>
									<option value="2" label = '2 Times'></option>
									<option value="3" label = '3 Times'></option>
									<option value="4" label = '4 Times'></option>
									<option value="5" label = '5 Times'></option>
									<option value="6" label = '6 Times'></option>
								</datalist>	
						</div>

							<button className="addButton" onClick={this.openReminderWindow}>Add</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;

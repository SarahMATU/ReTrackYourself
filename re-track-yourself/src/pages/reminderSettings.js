
import React from "react";
import { Link } from "react-router-dom";
import '../App.css'

class ReminderOption extends React.Component {
	openReminderWindow = () => {
		window.electron.openReminderWindow();
	};

	constructor() {
		super();
		this.state = {
			times: '1'
		}
		this.handleSlideChange = this.handleSlideChange.bind(this)
	}

	handleSlideChange(event) {
		this.setState({times: event.target.value})
	}

	render() {
		return (
			<div className="App">

				<div className="Body">
					<div className="Widgets">
						<Link className="widgetButton" to='/'>Home</Link>
						<Link className="widgetButton" to='/timerOption'>Timer</Link>
						<Link className="widgetButton" to='/todoOption'>To-Do</Link>
					</div>

					<div className="InfoSettings">
						<div className="Information">
							<p>The Reminder sets an alert for you to get up and step away from the computer</p>
						</div>

						<div className="Settings">
							<p>How many times do you want the reminder to go off?</p>
							<div className="sliderSettings">
								<input 
								type="range" 
								list="markers" 
								min='1' max='6' 
								value={this.state.times}
								onChange={this.handleSlideChange}/>

								<datalist id="markers">
									<option value="1" label = '6 Times'></option>
									<option value="2" label = '5 Times'></option>
									<option value="3" label = '4 Times'></option>
									<option value="4" label = '3 Times'></option>
									<option value="5" label = '2 Times'></option>
									<option value="6" label = '1 Time'></option>
								</datalist>	
						</div>
						<button className="setButton">{this.state.times}</button>
						<button className="addButton" onClick={this.openReminderWindow}>Add</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ReminderOption;


import React from "react";
import { Link } from "react-router-dom";
import '../App.css';
import '../components/timer/timer.js';

class TimerOption extends React.Component {

	openTimerWindow = () => {
		window.electron.openTimerWindow();
	};

	constructor(props) {
		super(props);
		this.state = {
			selectedTime: 6,
		};
	};

	handleSlideChange = (event) => {
		this.setState({selectedTime: event.target.value});
	};

	sendTime = () => {
		return this.state.selectedTime;
	}

	timeCheck = () => {
		alert(this.state.selectedTime);
	}
	
	render() {
		return (
			<div className="App">
				
				<div className="Body">
					<div className="Widgets">
						<Link className="widgetButton" to='/'>Home</Link>
						<Link className="widgetButton" to='/todoOption'>To-Do</Link>
						<Link className="widgetButton" to='/reminderOption'>Reminder</Link>
					</div>

					<div>
						<div className="Information">
							<p>The Timer allows you to set a countdown timer for your alloted study time</p>
						</div>

						<div className="Settings">
							<p>How long are you planning to study for?</p>
							<div className="sliderSettings">
								<input 
								type="range" 
								list="time" 
								min='1' 
								max='6'
								value = {this.state.selectedTime}
								onChange={this.handleSlideChange} />

								<datalist id="time">
									<option value="1" label = '6 Hour'></option>
									<option value="2" label = '5 Hours'></option>
									<option value="3" label = '4 Hours'></option>
									<option value="4" label = '3 Hours'></option>
									<option value="5" label = '2 Hours'></option>
									<option value="6" label = '1 Hours'></option>
								</datalist>	
							</div>
							<button className="setButton" onClick={this.timeCheck}>Set Time</button>
							<button className="addButton" onClick={this.openTimerWindow}>Add</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default TimerOption;
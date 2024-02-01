import React from "react";
import './timer.css';
import {sendTime, selectedTime} from '../../pages/timerSettings';

import { useState } from "react";


class Timer extends React.Component {

	
	render() {
		return (
			<div className="App">
                <div>
                    <p>Time Remaining : {this.selectedTime}
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

export default Timer;


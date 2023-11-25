import './App.css';
import React from 'react';

let Timer = "../src/components/timer/timer.js"

export default function App() {

  return (
    <div className="App">

      <div className='Header'>
        <p>Header</p>
      </div>

      <div className='Body'>
        <div className='Widgets'>

          <div className='Timer'>Timer</div>
          <img className='widgetImg'></img>

          <div className='ToDo'>To-Do</div>
          <img className='widgetImg'></img>

          <div className='Reminder'>Reminder</div>
          <img className='widgetImg'></img>

        </div>

        <div className='Settings'>
          <p>Set the time you want for this study session</p>
          
          <input type="number"></input>
          <button>Set Time:</button>
          <a href= {Timer} target = "_blank" >
            <button className='addButton'>Timer add</button>
          </a>
      </div>
    </div>
    <div className='Footer'>
        <p>Footer</p>
      </div>
    </div>
  );
}

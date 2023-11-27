import './App.css';
import React from 'react';

class App extends React.Component{
  openTimerWindow = () => {
    window.electron.openTimerWindow();
  };

  openTodoWindow = () => {
    window.electron.openTodoWindow();
  };

  render() {
    return (
      <div className="App">

      <div className='Header'>
        <p>Header</p>
      </div>

      <div className='Body'>
        <div className='Widgets'>

          <div className='Timer'>Timer</div>
          <img className='widgetImg' src="../src/components/timer/timerPlace.jpg" alt="timer"></img>

          <div className='Todo'>To-Do</div>
          <img className='widgetImg' src="src/components/timer/timerPlace.jpg" alt='todo'></img>

          <div className='Reminder'>Reminder</div>
          <img className='widgetImg' src="src\components\timer\timerPlace.jpg" alt='reminder'></img>

        </div>

        <div className='Settings'>
          <p>Set the time you want for this study session</p>
          <div>
            <input type="number"></input>
            <button>Set Time:</button>
          </div>
      </div>
    </div>
    <div className='Footer'>
        <p>Footer</p>
      </div>
    </div>
    )
  }
}

export default App;

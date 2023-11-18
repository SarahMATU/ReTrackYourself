import './App.css';

function App() {

  return (
    <div className="App">

      <div className='Header'>
        <h1>This is the Header</h1>
      </div>

      <div className='Body'>
        <div className='Widgets'>
          <div className='Timer'>Timer
          </div>
          <div className='ToDo'>To-Do</div>
          <div className='Reminder'>Reminder</div>
        </div>

        <div className='Settings'>
          <h1>This is the Settings Area</h1>
          <button className='addButton'>Add</button>
        </div>
      </div>

      <div className='Footer'>
        <h1>This is the Footer</h1>
      </div>

    </div>
  );
}

export default App;

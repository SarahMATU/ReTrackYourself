import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { HashRouter, Route, Routes } from 'react-router-dom';

import Home from './App'
import TimerOption from './pages/timerSettings';
import ReminderOption from './pages/reminderSettings';
import ToDoOption from './pages/todoSettings';
import Timer from './components/timer/timer'
import Reminder from './components/reminder/reminder'
import Todo from './components/todo/todo'
import BreakTimeModal from './components/reminder/breakTimeModal';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <HashRouter basename='/'>
    <div>
      <main>
        <Routes>
          <Route exact path='/' Component={Home} />
          <Route path='/timerOption' Component={TimerOption} />
          <Route path='/reminderOption' Component={ReminderOption} />
          <Route path='/todoOption' Component={ToDoOption} />
          <Route path='/timer' Component={Timer}/>
          <Route path='/todo' Component={Todo}/>
          <Route path='/reminder' Component={Reminder}/>
          <Route path='/break' Component={BreakTimeModal}/>
        </Routes> 
      </main>
    </div>
  </HashRouter>
);

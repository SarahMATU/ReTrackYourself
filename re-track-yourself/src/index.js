import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {HashRouter as Router, Route, Routes} from 'react-router-dom'

import Home from './App'
import Timer from './pages/timerSettings'
import Todo from './pages/todoSettings'
import Reminder from './pages/reminderSettings'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <div>
      <main>
        <Routes>
          <Route exact path='/' Component={Home} />
          <Route path='/timer' Component={Timer} />
          <Route path='/reminder' Component={Reminder} />
          <Route path='/todo' Component={Todo} />
        </Routes> 
      </main>
    </div>
  </Router>
);

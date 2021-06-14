import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import './App.css';
import CompetitionDisplay from './components/CompetitionDisplay';
import Header from './components/Header';
import MainFeed from './components/MainFeed';
import PostBookProgressForm from './components/PostBookProgressForm';
import StartBookForm from './components/StartBookForm';

function App() {
  return (
    <Router>
      <div className="App">
      <Header/>
        <nav>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/current-competition">View Current Competition</NavLink></li>
            <li><NavLink to="/start-book">Start a Book</NavLink></li>
            <li><NavLink to="/update-book-progress">Update Progress</NavLink></li>
          </ul>
        </nav>
        <Switch>
            <Route path="/" exact>
              <MainFeed/>
            </Route>
            <Route path="/current-competition">
              <CompetitionDisplay />
            </Route>
            <Route path="/start-book">
              <StartBookForm/>
            </Route>
            <Route path="/update-book-progress">
              <PostBookProgressForm/>
            </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;

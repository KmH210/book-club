import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import './App.css';
import About from './components/About';
import CompetitionDisplay from './components/CompetitionDisplay';
import CompetitionForm from './components/CompetitionForm';
import Header from './components/Header';
import MainFeed from './components/MainFeed';
import PostBookProgressForm from './components/PostBookProgressForm';
import StartBookForm from './components/StartBookForm';
import { AuthContext } from './context/auth-context';

function App() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <div className="App">
      <Header/>
        <nav className="Nav">
          <ul className="NavLinkList">
            <li><NavLink className="Navs" to="/">Home</NavLink></li>
            <li><NavLink className="Navs" activeClassName="selected" to="/current-competition">View Current Competition</NavLink></li>
            <li><NavLink className="Navs" activeClassName="selected" to="/start-book">Start a Book</NavLink></li>
            <li><NavLink className="Navs" activeClassName="selected" to="/update-book-progress">Update Progress</NavLink></li>
          </ul>
        </nav>
        <Switch>
            {!user ? <Route path="/" exact>
              <About/>
            </Route> :
            <Route path="/" exact>
              <MainFeed/>
            </Route>}
            {!user ? <Route path="/current-competition" exact>
              <About/>
            </Route> :
            <Route path="/current-competition">
              <CompetitionDisplay />
            </Route>}
            <Route path="/start-book">
              <StartBookForm/>
            </Route>
            <Route path="/update-book-progress">
              <PostBookProgressForm/>
            </Route>
            <Route path="/start-new-competition">
              <CompetitionForm />
            </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;

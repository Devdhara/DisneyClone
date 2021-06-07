import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Detail from './components/Detail';

function App() {
  return (
    <div className="App">
      <Router>
        {/* Header remains the same */}
        <Header />
        <Switch>
        <Route path="/detail">
            <Detail />
          </Route>
          {/* //for Home component */}
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      
      </Router>      

    </div>
  );
}

export default App;

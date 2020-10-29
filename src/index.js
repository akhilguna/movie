
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ReactDOM from 'react-dom';
import Person from "./components/App";
import Top from "./components/Top";

function App() {
  return (
    <Router>
      <div>
        <nav clasName="navbar navbar-default navbar-custom">
    <ul clasName="navbar-nav">
      
      <li clasName="nav-item">
      <Link to="/" clasNameName="nav-link">upcoming movies</Link>
      </li>
      <li clasName="nav-item">
      <Link to="/top" clasNameName="nav-link">top rated movies</Link>
      </li>
    </ul>
  
</nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/top">
            <Top/>
          </Route>
          <Route path="/">
            <Person />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


ReactDOM.render(
 <App/>,
  document.getElementById('root')
);

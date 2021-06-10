import React from 'react'; 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages';
import signinPage from './pages/signin';
// import Navbar from "./components/Navbar";
// import Sidebar from './components/Navbar/Sidebar';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/signin" component={signinPage} exact/>
      </Switch>
    </Router>
  );
}

export default App;

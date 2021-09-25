import React from 'react';
import {BrowserRouter, Switch,Route} from 'react-router-dom';
import StartPage from './components/StartPage/StartPage';
import SearchPage from './components/Search/SearchPage';
import LoginPage from './components/Login/LoginPage';
import SignupPage from './components/Signup/SignupPage';
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={StartPage} />
          <Route exact path="/search" component={SearchPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignupPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;


import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './screens/Home';
import Landing from './screens/Landing';

import apiClient from "./services/ApiClient";

function LoadingScreen() {
  return (
    <div className="LoadingScreen" style={{
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center'
    }}>
      <img src="./assets/loading.gif" alt="Loading..." />
    </div>
  );
}

const getInventories = () => {
  try {
    apiClient.get('/users/1/inventories',
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
        }
      }).then(function (response) {
        console.log('response is : ' + JSON.stringify(response.data));
      }).catch(function (error) {
        console.log(error.response);
      });
  } catch (err) {
    console.log(err);
  }
}

function App() {
  return (
    <Router>
      <div className="App">

        <Link to="/">Back to loading...</Link>
        <br></br>
        <Link to="/home">Home</Link>
        <br></br>
        <Link to="/landing">Landing</Link>

        <Switch>
          <Route path="/landing">
            <Landing />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <LoadingScreen />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import React, { useState, useEffect } from 'react';

import {Container} from 'react-bootstrap';
import { Link,BrowserRouter as Router,Route, Switch } from 'react-router-dom';



import firebaseDb from './Firebase'

import Computer from './Components/Type/Computer';
import Mythology from './Components/Type/Mythology';
import Geography from './Components/Type/Geography';
import Games from './Components/Type/Games';
import NavBar from './Components/NavBar';
import Home from './Components/Home';

function App() {


  console.log("haha");


  return (
    <>
      <Router>
        <NavBar />
        <Container>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/computer'>
              <Computer />
            </Route>
            <Route exact path='/mythology'>
              <Mythology />
            </Route>
            <Route exact path='/geography'>
              <Geography />
            </Route>
            <Route exact path='/games'>
              <Games />
            </Route>
          </Switch>
        </Container>
      </Router>
    </>
  )
}




export default App;


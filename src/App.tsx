import React from 'react';
import {
  BrowserRouter as Router,
  // Switch,
  Route,
} from "react-router-dom";
import { Homepage, Authorization } from 'views';
import { Header, Footer } from 'components';
import './scss/app.scss';

function App() {
  return (
    <>
      <Router>
        <Header />
        <main className="App">
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/auth">
            <Authorization />
          </Route>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;

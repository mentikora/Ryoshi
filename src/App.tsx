import React from 'react';
import {
  BrowserRouter as Router,
  // Switch,
  Route,
} from "react-router-dom";
import { ThemeProvider } from '@material-ui/core/styles';
import { Homepage, Authorization } from 'views';
import { Header, Footer } from 'components';
import { theme } from './theme';
import './scss/app.scss';

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
    </>
  );
}

export default App;

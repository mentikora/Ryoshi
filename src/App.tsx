import React from 'react';
import { Welcome } from 'layout';
import { Header, Footer } from 'components';
import './scss/app.scss';

function App() {
  return (
    <main className="App">
      <Header />
      <Welcome />
      <Footer />
    </main>
  );
}

export default App;

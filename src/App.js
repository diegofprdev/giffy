import React from 'react';
import { Route } from 'wouter'
import './App.css';

import { GifsContextProvider } from './contexts/GifsContext';

import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import Detail from './pages/Detail';

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>Giffy</h1>
        <GifsContextProvider>
          <Route path='/' component={Home} />
          <Route path='/search/:keyword' component={SearchResults} />
          <Route path='/gif/:id' component={Detail} />
        </GifsContextProvider>
      </section>
    </div>
  );
}

export default App;

import React from 'react';
import { Route, Link } from 'wouter'
import './App.css';

import { GifsContextProvider } from './contexts/GifsContext';

import Logo from './components/Logo'
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import Detail from './pages/Detail';
import NotFound from './components/404';

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <figure className='App-logo'>
          <Link to='/'>
            <Logo />
          </Link>
        </figure>
        <GifsContextProvider>
          <Route path='/' component={Home} />
          <Route path='/search/:keyword/:rating?' component={SearchResults} />
          <Route path='/gif/:id' component={Detail} />
          <Route path='/404' component={NotFound} />
        </GifsContextProvider>
      </section>
    </div>
  );
}

export default App;

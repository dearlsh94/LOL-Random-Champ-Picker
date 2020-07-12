import React from 'react';
import './App.css';

import {BrowserRouter, Route} from 'react-router-dom';

import Home from './pages/Home';
import Test from './pages/Test';

function App() {
  return (
    <React.Fragment>
        <main>
          <div/>
            <BrowserRouter>
              <Route exact path="/" component={Home}/>
            </BrowserRouter>
        </main>
      </React.Fragment>
  );
}

export default App;
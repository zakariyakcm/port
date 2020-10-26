import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import Home from './components';

import {Route} from 'react-router-dom';
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Cv from "./components/Cv";
import About from "./components/About";


function App() {
  return (
    <>
      <CssBaseline />
      <Route exact path="/" component={Home}/>
      <Route path="/resume" component={Resume}/>
      <Route path="/portfolio" component={Portfolio}/>
      <Route path="/cv" component={Cv}/>
      <Route path="/about" component={About}/>

    </>
  );
}

export default App;

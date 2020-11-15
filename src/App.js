import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Component/Home/Home';
import Projects from './Component/Projects/Projects';
import About from './Component/About/About';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/projects" component={Projects}/>
      <Route path="/about" component={About}/>
    </div>
    </BrowserRouter>
  );
}

export default App;

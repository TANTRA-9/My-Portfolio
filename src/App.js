import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Component/Home/Home';
import Apmah from './Component/Projects/Apmah/Apmah';
import Stay_Fit from './Component/Projects/Stay_Fit/Stay_Fit';
import About from './Component/About/About';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/projects/apmah" component={Apmah}/>
      <Route path="/projects/stay-fit" component={Stay_Fit}/>
      <Route path="/about" component={About}/>
    </div>
    </BrowserRouter>
  );
}

export default App;

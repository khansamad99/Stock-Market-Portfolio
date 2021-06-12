import React from 'react';
import  { Route, BrowserRouter } from 'react-router-dom'
import Portfolio from './pages/Portfolio';
import Homepage from './pages/Homepage';

const App = () => {
  return (
    <BrowserRouter>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/portfolio" component={Portfolio} />
    </BrowserRouter>
);

}
  
export default App;

import React from 'react';
import  { Route, BrowserRouter } from 'react-router-dom'
import Portfolio from './pages/Portfolio';
import Homepage from './pages/Homepage';
import Transactions from './pages/Transactions';

const App = () => {
  return (
    <BrowserRouter>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/transaction" component={Transactions}/>
    </BrowserRouter>
);

}
  
export default App;

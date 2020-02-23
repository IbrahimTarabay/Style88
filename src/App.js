import React from 'react';
import {Route,Switch} from 'react-router-dom';
import './App.css';
import Header from './components/header/header.jsx';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop.jsx';

function App() {
  return (
    <div>
      <Header />
      <Switch>{/*it allows for nested routes to work properly*/} 
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
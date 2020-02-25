import React from 'react';
import {Route,Switch} from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import {auth,createUserProfileDocument} from './firebase/firebase.utils';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null 
    };
  }

  unsubscribeFromAuth = null; 
 
  componentDidMount(){
    /*it's an open messaging system between app and firebase*/
    /*this connection is always open as long as our app component is mounted on dom*/  
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user =>{
        createUserProfileDocument(user);
    });
  }

  /*we have to close subscription when unmount because we don't want memory leaks in our js app*/
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        {/*header out of the switch because we want it to display in all pages*/}
        {/*we pass currentUser to make header aware of user sign in or sign out*/}
        <Switch>{/*it allows for nested routes to work properly*/} 
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
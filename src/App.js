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
    /*we stored the user data in our database in firebase.utils.js
     but now we have to store that data in the "state" of our app so we can use it*/ 
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      if(userAuth){/*if user signed in*/
        const userRef = await createUserProfileDocument(userAuth);
        /*we will get user object in both cases if he have object in database*/
        userRef.onSnapshot(snapShot =>{/*to get snapshot object(data) from that reference*/ 
           this.setState({
             currentUser:{
               id:snapShot.id,
               ...snapShot.data()
             }
           });
           /*console.log(this.state);*/
        })
      }
      else{/*if user log out set currentUser to null*/ 
        this.setState({currentUser:userAuth});
      }
    });
  }

  /*we have to close subscription when unmount because we don't want memory leaks in our js app
  related to listeners still being open even if the component that cares about the listener is no longer on the page*/
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
import React from 'react';
import {Route,Switch} from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import {auth,createUserProfileDocument} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';

class App extends React.Component {
  unsubscribeFromAuth = null; 
 
  componentDidMount(){
    const {setCurrentUser} = this.props;
    /*it's an open messaging system between app and firebase*/
    /*this connection is always open as long as our app component is mounted on dom*/ 
    /*we stored the user data in our database in firebase.utils.js
     but now we have to store that data in the "state" of our app so we can use it*/ 
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      if(userAuth){/*if user signed in*/
        const userRef = await createUserProfileDocument(userAuth);
        /*we will get user object if he have object in database*/
        userRef.onSnapshot(snapShot =>{/*to get snapshot object(data of user) from that reference*/ 
           
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      else{/*if user log out set currentUser to null*/ 
        setCurrentUser(userAuth);
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
        <Header />
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


const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
  /*dispatch() whatever you're passing object is going to be an action that i'm going to pass to every reducer*/
  /*the user will be then used as a payload*/
})

export default connect(null,mapDispatchToProps)(App);
/*App component don't need currentUser anymore it's only setState it
so we will pass null as first argument*/

/*whenever you dispatch, all reducers are called, which is why there is no relation between reducer and action
what matter is only the action type because reducer check this*/

/*Reducer check action type --> action type check action --> action give payload to reducer --> 
  reducer return the new state to store --> store pass new props to the component)*/
import React from 'react';
import './sign-in.scss';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import {signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component{
  constructor(props){
    super(props);

    this.state = {
       email: '',
       password: ''
    }
  }

  handleSubmit = event =>{
    event.preventDefault();/*to have control and prevent default behavior*/ 
    this.setState({email: '',password:''})
  }

  handleChange = event =>{
    const {value,name} = event.target;
    this.setState({[name]:value})/*[name] to dynamically work with any name*/ 
  }

  render(){
    return(
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
           name="email"
           type="email"
           label="Email"
           value={this.state.email}
            handleChange={this.handleChange}
             required />
    
          <FormInput 
          name="password" 
          type="password"
          label="Password"
           value={this.state.password}
            handleChange={this.handleChange}
             required />
          
          <div className='buttons'>
          <CustomButton type='submit'>Sign in {/*children*/}</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>{/*isGoogleSignIn = true by default*/}
                  Sign in with Google
            </CustomButton> 
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
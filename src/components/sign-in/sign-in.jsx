import React from 'react';
import './sign-in.scss';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

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
           label="email"
           value={this.state.email}
            handleChange={this.handleChange}
             required />
    
          <FormInput 
          name="password" 
          type="password"
          label="password"
           value={this.state.password}
            handleChange={this.handleChange}
             required />

    <CustomButton type='submit'>Sign in {/*children*/}</CustomButton> 
        </form>
      </div>
    );
  }
}

export default SignIn;
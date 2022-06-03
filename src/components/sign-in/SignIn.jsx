import React, { Component } from "react";
import CustomButton from "../custom-button/CustomButton";
import FormInput from "../form-input/FormInput";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import { signInWithEmailAndPassword } from "firebase/auth";

import "./SignIn.scss";

class SignIn extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    email: "",
    password: "",
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    
    const { email, password } = this.state;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      this.setState({email:'' , password:''
    })
    } catch (error) {console.log(error)}
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className='sign-in'>
        <h2 className='title'>I already have an account</h2>
        <span>sign in with your Email and Password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            label='Email'
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />

          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
          <div className='buttons'>
            <CustomButton type='submit' >Sign in</CustomButton>
            <CustomButton isGoogleSignIn onClick={signInWithGoogle}>
              Sign in with google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;

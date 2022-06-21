import React, { Component } from "react";

// Styled Components
import {SignInContainer, SignInTitle, ButtonsBarContainer} from './SignIn.styles'

// Components
import FormInput from "../form-input/FormInput.component";
import CustomButton from "../custom-button/CustomButton.component";

// Firebase/Auth
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import { signInWithEmailAndPassword } from "firebase/auth";


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
      <SignInContainer>
        <SignInTitle >I already have an account</SignInTitle>
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
          <ButtonsBarContainer>
            <CustomButton type='submit' >Sign in</CustomButton>
            <CustomButton isGoogleSignIn onClick={signInWithGoogle}>
              Sign in with google
            </CustomButton>
          </ButtonsBarContainer>
        </form>
      </SignInContainer>
    );
  }
}

export default SignIn;

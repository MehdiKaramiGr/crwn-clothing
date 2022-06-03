import React from "react";
import SignIn from "../../components/sign-in/SignIn";
import SignUp from "../../components/sign-up/SignUp";

import "./SingInSingUpPage.scss";

const SignInSingUpPage = () => {
  return (
    <div className='sign-in-and-sign-up'>
      <SignIn /> <SignUp />
    </div>
  );
};

export default SignInSingUpPage;

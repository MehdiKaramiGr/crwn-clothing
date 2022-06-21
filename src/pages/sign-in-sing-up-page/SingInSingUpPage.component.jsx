import React from "react";

// Styled Components
import { SignInAndSignUpContainer } from "./SingInSingUpPage.styles";

import SignIn from "../../components/sign-in/SignIn.component";
import SignUp from "../../components/sign-up/SignUp.component";

const SignInSingUpPage = () => {
	return (
		<SignInAndSignUpContainer>
			<SignIn /> <SignUp />
		</SignInAndSignUpContainer>
	);
};

export default SignInSingUpPage;

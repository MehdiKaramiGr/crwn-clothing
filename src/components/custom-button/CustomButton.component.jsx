import React from "react";

// Styled Components
import { CustomButtonContainer } from "./CustomButton.styles";

const CustomButton = ({ children, ...props }) => {
	return (
		<CustomButtonContainer {...props}>{children}</CustomButtonContainer>
	);
};

export default CustomButton;

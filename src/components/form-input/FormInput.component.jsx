import React from "react";

// Styled Components
import {
	GroupContainer,
	FormInputContainer,
	FormInputLabel,
} from "./FormInput.styles";


const FormInput = ({ handleChange, label, ...otherProps }) => {
	return (
		<GroupContainer>
			<FormInputContainer onChange={handleChange} {...otherProps} />
			{label ? <FormInputLabel>{label}</FormInputLabel> : null}
		</GroupContainer>
	);
};

export default FormInput;

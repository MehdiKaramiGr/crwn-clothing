import styled, { css } from "styled-components";
import CustomButton from "../custom-button/CustomButton.component";

const CartDropdownContainer = styled.div`
	position: absolute;
	width: 280px;
	height: 340px;
	display: flex;
	flex-direction: column;
	padding: 20px;
	border: 1px solid black;
	background-color: white;
	top: 90px;
	right: 40px;
	z-index: 5;
`;

const EmptyMessageContainer = styled.span`
	font-size: 18px;
	margin: 50px auto;
`;

const CartItemsContainer = styled.div`
	height: 240px;
	display: flex;
	flex-direction: column;
	overflow: auto;
`;

const CartDropdownButton = styled(CustomButton)`
	margin-top: auto;
`;

export {
	CartDropdownButton,
	CartItemsContainer,
	EmptyMessageContainer,
	CartDropdownContainer,
};

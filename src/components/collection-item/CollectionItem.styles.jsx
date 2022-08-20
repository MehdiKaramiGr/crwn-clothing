import styled from "styled-components";
import CustomButton from "../custom-button/CustomButton.component";

const CollectionItemContainer = styled.div`
	width: 22vw;
	display: flex;
	flex-direction: column;
	height: 350px;
	align-items: center;
	position: relative;
	padding-block: 10px;
	@media only screen and (max-width:1025px){
		width: 280px;
		
		
	}
	&:hover {
		.image {
			opacity: 0.8;
		}
		button {
			opacity: 0.85;
			display: flex;
		}
	}
`;

const AddButton = styled(CustomButton)`
	width: 80%;
	opacity: 0.7;
	position: absolute;
	top: 255px;
	display: none;
`;

const BackgroundImage = styled.div`
	width: 100%;
	height: 95%;
	background-size: cover;
	background-position: center;
	margin-bottom: 5px;
	background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

const CollectionFooterContainer = styled.div`
	width: 100%;       
	font-weight: 500;
	height: 5%;
	padding-inline:10px;
	display: flex;
	justify-content: space-between;
	font-size: 18px;
	
`;

const NameContainer = styled.span`
	width: 90%;
	margin-bottom: 15px;
`;

const PriceContainer = styled.span`
	width: 10%;
	text-align: right;
`;

export {
	CollectionItemContainer,
	AddButton,
	BackgroundImage,
	CollectionFooterContainer,
	NameContainer,
	PriceContainer,
};

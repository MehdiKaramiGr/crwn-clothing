import styled from "styled-components";

const CheckoutItemContainer = styled.div`
	width: 100%;
	display: flex;
	min-height: 100px;
	border-bottom: 1px solid darkgrey;
	padding: 15px 0;
	font-size: 20px;
	align-items: center;
`;

const ImageContainer = styled.div`
	width: 23%;
	padding-right: 15px;
	img {
		width: 100%;
		height: 100%;
	}
`;

const TextContainer = styled.span`
	width: 23%;
`;

const QuantityContainer = styled(TextContainer)`
	display: flex;
	-webkit-touch-callout: none; /* iOS Safari */
	-webkit-user-select: none; /* Safari */
	-khtml-user-select: none; /* Konqueror HTML */
	-moz-user-select: none; /* Old versions of Firefox */
	-ms-user-select: none; /* Internet Explorer/Edge */
	user-select: none;
	span {
		margin: 0 10px;
	}
	div {
		cursor: pointer;
	}
`;

const RemoveButtonContainer = styled.div`
	padding-left: 12px;
	cursor: pointer;
`;

export {
	CheckoutItemContainer,
	ImageContainer,
	TextContainer,
	QuantityContainer,
	RemoveButtonContainer,
};

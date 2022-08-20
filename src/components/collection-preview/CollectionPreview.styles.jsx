import styled from "styled-components";

const CollectionPreviewContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 30px;
	`;
	
	const TitleContainer = styled.h1`
	font-size: 28px;
	margin-bottom: 25px;
	
	cursor: pointer;
	&:hover {
		color: grey;
	}
	`;
	
	const PreviewContainer = styled.div`
	display: flex;
	justify-content: space-between;
	@media only screen and (max-width:1025px){
		flex-wrap: wrap;
		justify-content: space-evenly;
		
		
	}
`;

export {CollectionPreviewContainer, 
    TitleContainer ,
    PreviewContainer }
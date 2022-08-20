import styled from "styled-components";

const HomePageContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px 80px;
	@media only screen and (max-width:800px) {
        padding-inline:20px;
        
    }
`;

export {HomePageContainer}
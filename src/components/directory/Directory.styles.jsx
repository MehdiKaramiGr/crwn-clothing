import styled from "styled-components";

const DirectoryMenuContainer = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;

	@media only screen and (max-width: 1100px) {
		flex-direction: column;
	}
`;

export { DirectoryMenuContainer };

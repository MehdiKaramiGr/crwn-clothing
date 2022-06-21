import styled, { css } from "styled-components";

import { Link } from "react-router-dom";

const optionContainerStyles = css`
	padding: 10px 15px;
	cursor: pointer;
`;

const HeaderContainer = styled.div`
	height: 70px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-bottom: 25px;
`;

const LogoContainer = styled(Link)`
	height: 100%;
	width: 70px;
	padding: 25px;
`;

const OptionsContainer = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

const OptionLink = styled(Link)`
	${optionContainerStyles}
`;

const OptionDiv = styled.div`
	${optionContainerStyles}
`;

export {HeaderContainer , LogoContainer , OptionsContainer , OptionDiv , OptionLink }
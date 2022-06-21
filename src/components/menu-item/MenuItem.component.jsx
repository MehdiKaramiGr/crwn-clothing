import React from "react";

// Styled Components
import {
	MenuItemContainer,
	BackgroundImageContainer,
	ContentContainer,
	ContentTitle,
	ContentSubtitle,
} from "./MenuItem.styles";

// React-Router
import { useNavigate, useLocation } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
	let navigate = useNavigate();
	let { pathname } = useLocation();
	return (
		<MenuItemContainer
			onClick={() => {
				navigate(`${pathname}${linkUrl}`);
			}}
		>
			<BackgroundImageContainer
				className="background-image"
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}
			/>
			<ContentContainer>
				<ContentTitle>{title.toUpperCase()}</ContentTitle>
				<ContentSubtitle>SHOP NOW</ContentSubtitle>
			</ContentContainer>
		</MenuItemContainer>
	);
};
export default MenuItem;

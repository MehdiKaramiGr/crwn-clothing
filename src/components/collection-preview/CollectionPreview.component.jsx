import React from "react";

// Styled Components
import {
	CollectionPreviewContainer,
	TitleContainer,
	PreviewContainer,
} from "./CollectionPreview.styles";

// Components
import CollectionItem from "../collection-item/CollectionItem.component";

// react-router-dom "for navigating to collections"
import { useNavigate, useLocation } from "react-router-dom";

const CollectionPreview = ({ title, items, routeName }) => {
	let navigate = useNavigate();
	let { pathname } = useLocation();
	return (
		<CollectionPreviewContainer>
			<TitleContainer
				onClick={() => {
					navigate(`${pathname}/${routeName}`);
				}}
			>
				{title.toUpperCase()}
			</TitleContainer>
			<PreviewContainer>
				{items
					.filter((item, idx) => idx < 4)
					.map((item) => (
						<CollectionItem key={item.id} item={item}>
							{" "}
						</CollectionItem>
					))}
			</PreviewContainer>
		</CollectionPreviewContainer>
	);
};

export default CollectionPreview;

import React from "react";

// Styled Components
import {
	CollectionPreviewContainer,
	TitleContainer,
	PreviewContainer,
} from "./CollectionPreview.styles";

// Components
import CollectionItem from "../collection-item/CollectionItem.component";


const CollectionPreview = ({ title, items }) => {
	return (
		<CollectionPreviewContainer>
			<TitleContainer>{title.toUpperCase()}</TitleContainer>
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

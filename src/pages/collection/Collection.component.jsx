import React from "react";

// Styled Components
import {
	CollectionPageContainer,
	CollectionTitle,
	CollectionItemsContainer,
} from "./Collection.styles";

// Components
import CollectionItem from "../../components/collection-item/CollectionItem.component";

// Redux
import { useSelector } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";

// React-Router
import { useParams } from "react-router-dom";

const CollectionPage = () => {
	let { collectionID } = useParams();
	const collection = useSelector((state) =>
		selectCollection(collectionID)(state)
	);
	const { title, items } = collection;
	return (
		<CollectionPageContainer>
			<CollectionTitle>{title}</CollectionTitle>
			<CollectionItemsContainer>
				{items.map((item) => (
					<CollectionItem key={item.id} item={item} />
				))}
			</CollectionItemsContainer>
		</CollectionPageContainer>
	);
};

export default CollectionPage;

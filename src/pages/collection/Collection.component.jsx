import { React } from "react";

// Styled Components
import {
	CollectionPageContainer,
	CollectionTitle,
	CollectionItemsContainer,
} from "./Collection.styles";

// Components
import CollectionItem from "../../components/collection-item/CollectionItem.component";

// Redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollection } from "../../redux/shop/shop.selectors";

const CollectionPage = (props) => {
	console.log(props);
	const { collection } = props;
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

const mapStateToProps = createStructuredSelector({
	collection: (state, ownProps) =>
		selectCollection(ownProps.route.params.collectionID)(state),
});

export default connect(mapStateToProps)(CollectionPage);

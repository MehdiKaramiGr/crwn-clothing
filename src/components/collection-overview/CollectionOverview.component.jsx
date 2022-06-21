import React from "react";

// Styled Components
import {CollectionsOverviewContainer} from './CollectionOverview.styles'

// Components
import CollectionPreview from "../collection-preview/CollectionPreview.component";

// redux
import { connect } from "react-redux";
import { selectCollectionForPreview } from "../../redux/shop/shop.selectors";
import { createStructuredSelector } from "reselect";

const CollectionOverview = ({ collections }) => {
	return (
		<CollectionsOverviewContainer >
			{collections
				.filter((item, idx) => idx < 4)
				.map(({ id, ...otherCollectionProps }) => (
					<CollectionPreview key={id} {...otherCollectionProps} />
				))}
		</CollectionsOverviewContainer>
	);
};

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionForPreview,
});
export default connect(mapStateToProps)(CollectionOverview);

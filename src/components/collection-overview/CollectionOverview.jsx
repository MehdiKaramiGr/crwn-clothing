import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../collection-preview/CollectionPreview";

import { selectCollectionForPreview } from "../../redux/shop/shop.selectors";

import "./CollectionOverview.scss";

const CollectionOverview = ({ collections }) => {
	return (
		<div className=".collections-overview">
			{collections
				.filter((item, idx) => idx < 4)
				.map(({ id, ...otherCollectionProps }) => (
					<CollectionPreview key={id} {...otherCollectionProps} />
				))}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionForPreview,
});
export default connect(mapStateToProps)(CollectionOverview);

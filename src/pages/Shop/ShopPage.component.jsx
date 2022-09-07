import React from "react";

// Components
import CollectionPageContainer from "../collection/Collection.container";
import CollectionsOverviewContainer from "../../components/collection-overview/CollectionOverview.container";

// React-Router
import { Route, Routes } from "react-router-dom";

// Redux
import { connect } from "react-redux";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import { createStructuredSelector } from "reselect";
import {
	selectIsCollectionFetching,
	selectIsCollectionsLoaded,
} from "../../redux/shop/shop.selectors";

class ShopPage extends React.Component {
	componentDidMount() {
		const { fetchCollectionsStartAsync } = this.props;
		fetchCollectionsStartAsync();
	}
	render() {
		return (
			<div>
				<Routes>
					<Route exact path="" element={<CollectionsOverviewContainer />} />
					<Route path=":collectionID" element={<CollectionPageContainer />} />
				</Routes>
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	isCollectionFetching: selectIsCollectionFetching,
	isCollectionsLoaded: selectIsCollectionsLoaded,
});

const mapDispatchToProps = (dispatch) => ({
	fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);

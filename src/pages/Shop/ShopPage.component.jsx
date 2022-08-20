import React from "react";

// Components
import CollectionOverview from "../../components/collection-overview/CollectionOverview.component";
import CollectionPage from "../collection/Collection.component";

// HOC
import WithSpinner from "../../components/with-spinner/WithSpinner.component";

// React-Router
import { Route, Routes } from "react-router-dom";

// Redux
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.actions";

// Firebase
import {
	db,
	convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import {
	collection,
	onSnapshot,
	getDocs,
	QuerySnapshot,
} from "firebase/firestore";

// HOC usage
const CollectionPageWithSpinner = WithSpinner(CollectionPage);
const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);

class ShopPage extends React.Component {
	state = {
		loading: true,
	};
	unsubscribeFromSnapshop = null;

	componentDidMount() {
		const { updateCollections } = this.props;
		const collectionRef = collection(db, "collections");
		// this.unsubscribeFromSnapshop = onSnapshot(
		// 	collectionRef,
		// 	async (snapshot) => {
		// 		const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
		// 		updateCollections(collectionsMap);
		// 		this.setState({ loading: false });
		// 	}
		// );
		getDocs(collectionRef).then((snapshot) => {
			const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
			updateCollections(collectionsMap);
			this.setState({ loading: false });
		});
		// console.log(querySnapshot)
	}
	render() {
		const { loading } = this.state;
		return (
			<div>
				<Routes>
					<Route
						exact
						path=""
						element={<CollectionOverviewWithSpinner isLoading={loading} />}
					/>
					<Route
						path=":collectionID"
						element={<CollectionPageWithSpinner isLoading={loading} />}
					/>
				</Routes>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	updateCollections: (collectionsMap) =>
		dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);

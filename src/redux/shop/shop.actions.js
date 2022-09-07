import ShopActionTypes from "./shop.types";

import {
	db,
	convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import { collection, getDocs } from "firebase/firestore";

const fetchCollectionsStart = () => ({
	type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

const fetchCollectionsSuccess = (collectionsMap) => {
	return({
	type: ShopActionTypes.FETCH_COLLECTION_SUCCESS,
	payload: collectionsMap,
})};

const fetchCollectionsFailure = (errorMessage) => ({
	type: ShopActionTypes.FETCH_COLLECTION_FAILURE,
	payload: errorMessage,
});
const fetchCollectionsStartAsync = () => {
	return (dispatch) => {
		const collectionRef = collection(db, "collections");
		dispatch(fetchCollectionsStart());
		getDocs(collectionRef)
			.then((snapshot) => {
				const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
				dispatch(fetchCollectionsSuccess(collectionsMap));
			})
			.catch((error) => dispatch(fetchCollectionsFailure(error.message)));
	};
};

export {
	fetchCollectionsStart,
	fetchCollectionsStartAsync,
	fetchCollectionsSuccess,
	fetchCollectionsFailure,
};

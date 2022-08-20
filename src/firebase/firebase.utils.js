// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {
	getFirestore,
	getDoc,
	setDoc,
	collection,
	doc,
	writeBatch,
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAxzNBuOsvo5GgX53B0FOkJMbQcIb_EoYc",
	authDomain: "crwn-db-230ff.firebaseapp.com",
	projectId: "crwn-db-230ff",
	storageBucket: "crwn-db-230ff.appspot.com",
	messagingSenderId: "122211297820",
	appId: "1:122211297820:web:d78887eb210c8091aacdd9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

//Create an instance of the Google provider object

const provider = new GoogleAuthProvider();

const signInWithGoogle = () => {
	signInWithPopup(auth, provider);
};

const db = getFirestore();

const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;
	const userRef = doc(db, `users/${userAuth.uid}`);
	const snapShot = await getDoc(userRef);

	if (!snapShot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			await setDoc(userRef, {
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.log("error creating user", error.message);
		}
	}
	return userRef;
};

//batcher for transferring data to db
const addCollectionAndItems = async (collectionKey, objectsToAdd) => {
	const collectionRef = collection(db, collectionKey);
	const batch = writeBatch(db);
	objectsToAdd.forEach((obj) => {
		const newDocRef = doc(collectionRef);
		batch.set(newDocRef, obj);
	});
	return await batch.commit();
};

// convert Collections Snapshot To Map
const convertCollectionsSnapshotToMap = (collectionsSnapshot) => {
	const transformedCollection = collectionsSnapshot.docs.map((docSnapshot) => {
		const { title, items } = docSnapshot.data();
		return {
			routeName: encodeURI(title.toLowerCase()),
			id: docSnapshot.id,
			title,
			items,
		};
	});
	// ?
	return transformedCollection.reduce((accumulator, collection) => {
		accumulator[collection.title.toLowerCase()] = collection;
		return accumulator;
	}, {});
};

export {
	auth,
	app,
	db,
	signInWithGoogle,
	createUserProfileDocument,
	addCollectionAndItems,
	convertCollectionsSnapshotToMap,
};

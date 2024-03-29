import "./App.css";
import React from "react";

// Components
import Header from "./components/header/Header.component";
import HomePage from "./pages/homepage/HomePage.component";
import ShopPage from "./pages/Shop/ShopPage.component";
import SignInSingUpPage from "./pages/sign-in-sing-up-page/SingInSingUpPage.component";
import CheckoutPage from "./pages/checkout/Checkout.component";

// Reudx
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { selectCollectionForPreview } from "./redux/shop/shop.selectors";
import { createStructuredSelector } from "reselect";

// React-Router
import { Route, Routes, Navigate } from "react-router-dom";

// Firebase/Auth
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { onSnapshot } from "firebase/firestore";

class App extends React.Component {
	unsubscribeFromAuth = null;
	componentDidMount() {
		const { setCurrentUser } = this.props;
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);
				onSnapshot(userRef, (snapShot) => {
					setCurrentUser({
						id: snapShot.id,
						...snapShot.data(),
					});
				});
			} else {
				setCurrentUser(userAuth);
			}
		});
	}
	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}
	render() {
		return (
			<div>
				<Header />
				<Routes>
					<Route exact path="/" element={<HomePage />} />
					<Route path="/shop/*" element={<ShopPage />} />
					<Route
						path="/signin"
						element={
							this.props.currentUser ? (
								<Navigate to="/" />
							) : (
								<SignInSingUpPage />
							)
						}
					/>

					<Route exact path="/checkout" element={<CheckoutPage />} />
				</Routes>
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	collectionsArray: selectCollectionForPreview,
});

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

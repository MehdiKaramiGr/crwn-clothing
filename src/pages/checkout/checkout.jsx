import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
	selectCartItems,
	selectCartTotal,
} from "../../redux/cart/cart.selectors";

import CheckoutItem from "../../components/checkout-item/CheckoutItem";

import "./checkout.scss";
import StripeButton from "../../components/stripe-button/StripeButton";



const CheckoutPage = ({ cartItems, total }) => (
	<div className="checkout-page">
		<div className="checkout-header">
			<div className="header-block">
				<span>Product</span>
			</div>
			<div className="header-block">
				<span>Description</span>
			</div>
			<div className="header-block">
				<span>Quacntity</span>
			</div>
			<div className="header-block">
				<span>Price</span>
			</div>
			<div className="header-block">
				<span>Remove</span>
			</div>
		</div>
		{cartItems.map((cartItem) => (
			<CheckoutItem key={cartItem.id} cartItem={cartItem} />
		))}
		<div className="total">
			<span>TOTAL: ${total}</span>
		</div>
		<div className="test-warning">
			*please use the following test credit card for payments*
			<br />
			4242 4242 4242 4242 - Exp: 01/24 - CVV:123
		</div>
		<StripeButton price={total} />
	</div>
);

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);

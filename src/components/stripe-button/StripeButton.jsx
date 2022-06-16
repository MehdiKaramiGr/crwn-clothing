import React from "react";

import StripeCheckout from 'react-stripe-checkout';

import "./StripeButton.scss";

const StripeButton = ({ price }) => {
	const priceForStirpe = price * 100;
	const publishableKey =
		"pk_test_51LBJDwIMc662VESTgU5DFP6RrgcABkCsltfHwl6FhNjwaKFeHAYj14yn6GRsFZ01cJORB0nT5rms0aTLfGJNeu8C00TXhBqYww";

	const onToken = (token) => {
		console.log(token);
		alert("payment successful");
	};

	return (
		<StripeCheckout
			label="Pay Now"
			name="CRWN CLOTHING Ltd."
			billingAddress
			shippingAddress
			image="https://svgshare.com/i/CUz.svg"
			description={`Your total is $${price}`}
			amount={priceForStirpe}
			panelLabel="Pay Now"
            token = {onToken}
            stripeKey = {publishableKey}
		/>
	);
};

export default StripeButton;

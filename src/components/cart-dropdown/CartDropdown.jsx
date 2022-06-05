import React from "react";
import CustomButton from "../custom-button/CustomButton";
import CartItem from "../cart-item/CartItem";

import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.action";

import { useNavigate } from "react-router-dom";

import "./CartDropdown.scss";

const CartDropdown = ({ cartItems, dispatch }) => {
	let navigate = useNavigate();
	return (
		<div className="cart-dropdown">
			<div className="cart-items">
				{cartItems.length ? (
					cartItems.map((cartItem) => (
						<CartItem key={cartItem.id} item={cartItem} />
					))
				) : (
					<span className="empty-message">YOUR CART IS EMPTY </span>
				)}
			</div>
			<CustomButton
				onClick={() => {
          navigate("./checkout");
          dispatch(toggleCartHidden());
				}}
			>
				Go TO CHECKOUT
			</CustomButton>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);

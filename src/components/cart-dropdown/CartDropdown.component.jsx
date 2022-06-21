import React from "react";

// Styled components
import {
	CartDropdownButton,
	CartItemsContainer,
	EmptyMessageContainer,
	CartDropdownContainer,
} from "./CartDropdown.styles";

// Component
import CartItem from "../cart-item/CartItem.component";

// redux
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import { createStructuredSelector } from "reselect";

// React-Router
import { useNavigate } from "react-router-dom";


const CartDropdown = ({ cartItems, dispatch }) => {
	let navigate = useNavigate();
	return (
		<CartDropdownContainer>
			<CartItemsContainer>
				{cartItems.length ? (
					cartItems.map((cartItem) => (
						<CartItem key={cartItem.id} item={cartItem} />
					))
				) : (
					<EmptyMessageContainer>YOUR CART IS EMPTY </EmptyMessageContainer>
				)}
			</CartItemsContainer>
			<CartDropdownButton
				onClick={() => {
					navigate("./checkout");
					dispatch(toggleCartHidden());
				}}
			>
				Go TO CHECKOUT
			</CartDropdownButton>
		</CartDropdownContainer>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);

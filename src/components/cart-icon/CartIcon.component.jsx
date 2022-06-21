import React from "react";

// Styled Components
import {
	CartContainer,
	ShoppingIcon,
	ItemCountContainer,
} from "./CartIcon.styles";

// Redux
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";


const CartIcon = ({ toggleCartHidden, itemCount }) => {
	return (
		<CartContainer onClick={toggleCartHidden}>
			<ShoppingIcon className="shopping-icon" />
			<ItemCountContainer>{itemCount}</ItemCountContainer>
		</CartContainer>
	);
};


const mapStateToProps = createStructuredSelector({
	itemCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

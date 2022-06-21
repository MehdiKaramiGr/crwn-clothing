import React from "react";

// Styled Components
import {
	CartItemContainer,
	ItemDetailsContainer,
	CartItemImage,
} from "./CartItem.styles";


const CartItem = ({ item: { name, imageUrl, price, quantity } }) => {
	return (
		<CartItemContainer>
			<CartItemImage src={imageUrl} alt="item" />
			<ItemDetailsContainer>
				<span className="name">{name}</span>
				<span className="price">
					{" "}
					{quantity} x ${price}
				</span>
			</ItemDetailsContainer>
		</CartItemContainer>
	);
};

export default CartItem;

const addItemToCart = (cartitems, newCartItem) => {
	const existingCart = cartitems.find(
		(cartItem) => cartItem.id === newCartItem.id
	);
	if (existingCart) {
		return cartitems.map((cartItem) =>
			cartItem.id === newCartItem.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	} else {
		return [...cartitems, { ...newCartItem, quantity: 1 }];
	}
};

const removeItemFromCart = (cartItems, cartItemToRemove) => {
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === cartItemToRemove.id
	);
	if (existingCartItem.quantity === 1) {
		return cartItems.filter((cartItem) => cartItem.id != cartItemToRemove.id);
	} else {
		return cartItems.map((cartItem) =>
			cartItem.id === cartItemToRemove.id
				? { ...cartItem, quantity: cartItem.quantity - 1 }
				: cartItem
		);
	}
};

export { addItemToCart, removeItemFromCart };

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
      return [ ...cartitems , {...newCartItem , quantity:1} ]
  }
};


export {addItemToCart}
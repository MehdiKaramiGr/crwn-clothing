import { cartActionTypes } from "./cart.types";


const toggleCartHidden = () => ({
  type: cartActionTypes.TOGGLE_CART_HIDDEN,
});

const addItem = (item) => ({
  type: cartActionTypes.ADD_ITEM,
  payload:item
})


export {toggleCartHidden , addItem }
import React from "react";
import CustomButton from "../custom-button/CustomButton";
import CartItem from "../cart-item/CartItem";
import {selectCartItems} from '../../redux/cart/cart.selectors'

import { connect } from "react-redux";

import {useNavigate} from 'react-router-dom'

import "./CartDropdown.scss";

const CartDropdown = ({ cartItems }) => {
  let navigate = useNavigate()
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className='empty-message'>YOUR CART IS EMPTY </span>
        )}
      </div>
      <CustomButton onClick={()=>navigate("./checkout") } >Go TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);

import React from 'react';
import CustomButton from '../custom-button/custom-button';
import './cart-dropdown.scss';
import CartItem from '../cart-item/cart-item';
import {connect} from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';

const CartDropdown = ({cartItems}) =>(
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {
      cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
      }
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
   </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});
/*so if we sign out our cartItems in our cartDropdown as well as our cart cartItemsCount is not changing
because we don't need them to rerender and this help us on performance*/

export default connect(mapStateToProps)(CartDropdown);
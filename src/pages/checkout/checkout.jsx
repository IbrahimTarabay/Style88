import React from 'react';
import './checkout.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item'

const CheckoutPage = ({cartItems,total}) => (
  <div className='checkout-page'>
    <div className='checkout-header'>

      <div className='header-block'>
        <span>Product</span>
     </div>

     <div className='header-block'>
        <span>Description</span>
     </div>

     <div className='header-block'>
        <span>Quantity</span>
     </div>

     <div className='header-block'>
        <span>Price</span>
     </div>

     <div className='header-block'>
        <span>Remove</span>
     </div>
    </div>
    {
      cartItems.map(cartItem =>
         <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      )
    }{/*we pass quantity here because we want update it every time quantity change
    so we have here in this file selectCartItems that give us the new state everytime quantity change*/}
    <div className='total'>
      <span>TOTAL: ${total}</span>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);
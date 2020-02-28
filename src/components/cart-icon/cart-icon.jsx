import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
/*This is a new special syntax when importing SVG in React.
 The ReactComponent import name is special and tells Create React App
 that you want a React component that renders an SVG, rather than its filename.*/
import './cart-icon.scss';
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.actions';

const CartIcon = ({toggleCartHidden}) =>(
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>4</span>
    </div>
);

const mapDispatchToProps = dispatch =>({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(null,mapDispatchToProps)(CartIcon);
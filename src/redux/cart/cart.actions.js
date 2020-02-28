import {CartActionTypes} from './cart.types';

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
  /*payload is optional property, we don't need it in this case,
   we don't need to pass payload to cart.reducer*/
});
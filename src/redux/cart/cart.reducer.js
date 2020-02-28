import {CartActionTypes} from './cart.types';
import {addItemToCart} from './cart.utils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state=INITIAL_STATE,action) =>{
  switch(action.type){
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return{
        ...state,
        hidden: !state.hidden
      };/*we don't need to use action.payload we just want to toggle hidden values*/
    case CartActionTypes.ADD_ITEM:
       return {
         ...state,
         hidden: false,/*to make cart visible when adding items*/
         cartItems: addItemToCart(state.cartItems,action.payload)
       }
      default:
        return state;
  }
}

export default cartReducer;
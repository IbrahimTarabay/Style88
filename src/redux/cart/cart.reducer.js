import {CartActionTypes} from './cart.types';

const INITIAL_STATE = {
  hidden: true
};

const cartReducer = (state=INITIAL_STATE,action) =>{
  switch(action.type){
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return{
        ...state,
        hidden: !state.hidden
      }/*we don't need to use action.payload we just want to toggle hidden values*/
      default:
        return state;
  }
}

export default cartReducer;
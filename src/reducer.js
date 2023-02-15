import {CLEAR_CART, DECREASE, GET_TOTALS, INCREASE, REMOVE, TOGGLE_AMOUNT} from './actions'
import cartItems from "./cart-items";

const initialStore = {
  cart: cartItems,
  total: 1,
  amount: 5
};

function reducer(state = initialStore, action){
  if(action.type === CLEAR_CART){
    return {...state, cart:[]}
  }
  if (action.type === DECREASE) {
    let tempCart = state.cart.map((cartItem)=>{
        if(cartItem.id === action.payload.id){
            cartItem = {...cartItem, amount:cartItem.amount-1}
        }
        return cartItem
    });
    
    return {...state, cart: tempCart}
  }
  if (action.type === INCREASE) {
    let tempCart = state.cart.map((cartItem)=>{
        if(cartItem.id === action.payload.id){
            cartItem = {...cartItem, amount:cartItem.amount+1}
        }
        return cartItem
    });
    return {
        ...state, 
        cart:tempCart
    }
  }
  if (action.type === REMOVE) {
    return {
        ...state, 
        cart: state.cart.filter((cardItem) => cardItem.id !== action.payload.id)
    }
  }
  if(action.type === GET_TOTALS){
    let {total, amount} = state.cart.reduce(
        (cartTotal, cartItem)=>{
            const {price, amount} = cartItem;
            const itemTotal = price * amount;

            cartTotal.total += itemTotal;
            cartTotal.amount += amount;
            return cartTotal
    },{
        total:0, 
        amount:0
    });
    total = parseFloat(total.toFixed(2));
    return {...state, total, amount}
  }
  if(action.type === TOGGLE_AMOUNT){
    return{
        ...state, 
        cart:state.cart.map((cartItem) => {
            if(cartItem.id === action.payload.id) {
                if(action.payload.toggle === 'inc'){
                    return (cartItem = {...cartItem, amount:cartItem.amount + 1})
                } else if (action.payload.toggle === 'dec'){
                    return (cartItem = {...cartItem, amount:cartItem.amount - 1})
                }
            }
            return cartItem
        })
    }
  }
  return state;
}

export default reducer;
import { cartTypes } from "../types/cartTypes"

export const clear = () => {
  return {
    type: cartTypes.CLEAR_CART,
  };
}
export const remove = (id, cart) => {

  const newCart = cart.filter((cartItem) => cartItem.id !== id);
  return {
    type: cartTypes.REMOVE,
    payload: newCart
  };
}

export const toggle = (id, type, cart) => {
let newCart = cart
  .map((cartItem) => {
    if (cartItem.id === id) {
      if (type === "inc") {
        return { ...cartItem, amount: cartItem.amount + 1 };
      }
      if (type === "dec") {
        return { ...cartItem, amount: cartItem.amount - 1 };
      }
    }
    return cartItem;
  })
  .filter((cartItem) => cartItem.amount !== 0);

  return {
    type: cartTypes.TOGGLE_AMOUNT,
    payload: { type, cart: newCart,},
  };
}
export const addToCart =(id, cart, product) => {
  const cartItemsSliced = cart.slice();
  let alreadyInCart = false;
   cartItemsSliced.forEach((item) => {
     if (item.id ===  id) {
       item.amount++;
       alreadyInCart = true;
     }
   });
   if (!alreadyInCart) {
     cartItemsSliced.push({ ...product, amount: 1 });
   }
   console.log(product);

   return {
     type: cartTypes.ADD_TO_CART,
     payload: cartItemsSliced,
   };
}
export const getTotals = (cart) => {
 let { total, amount } = cart.reduce(
   (cartTotal, cartItem) => {
     const { price, amount } = cartItem;
     const itemTotal = price * amount;
     cartTotal.total += itemTotal;
     cartTotal.amount += amount;
     return cartTotal;
   },
   {
     total: 0,
     amount: 0,
   }
 );
 total = parseFloat(total.toFixed(2));
  return {
    type: cartTypes.GET_TOTALS,
    payload: {total, amount}
  }
}
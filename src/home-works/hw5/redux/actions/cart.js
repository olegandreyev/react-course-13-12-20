export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART';
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';

export const addProductToCard = (productId) => ({
  type: ADD_PRODUCT_TO_CART,
  payload: productId
});

export const removeProductFormCart = (productId) => ({
  type: REMOVE_PRODUCT_FROM_CART,
  payload: productId
});

export const toggleFavorite = productId => ({
  type: TOGGLE_FAVORITE,
  payload: productId
});


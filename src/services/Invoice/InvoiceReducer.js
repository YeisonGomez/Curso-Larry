import { handleActions } from 'redux-actions';

export const INITIAL_STATE = {
  typeTransaction: 'sale',
  products: [],
  loading: {
  },
  error: {
  }
};

const reducer = handleActions({
  INVOICE: {

    ADD_PRODUCT: (state, { payload: { product } }) => { 
      return { ...state, products: [...state.products, product] }
    },

    EDIT_QUANTITY_PRODUCT: (state, { payload: { index, quantity } }) => { 
      let newProducts = state.products
      newProducts[index].quantity = quantity
      return { ...state, products: newProducts }
    },

    SET_ERROR: (state, { payload: { keyState, error } }) => ({ ...state, error: { [keyState]: error } }),
    SET_LOADING: (state, { payload: { keyLoading, newState } }) => ({ ...state, loading: { [keyLoading]: newState } }),
    SET_STATE: (state, { payload: { keyState, newValue } }) => ({ ...state, [keyState]: newValue })
  }
},
INITIAL_STATE
);

export default reducer;
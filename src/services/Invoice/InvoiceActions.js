import { createActions } from 'redux-actions';

export const { invoice } = createActions({
  INVOICE: {
    ADD_PRODUCT: (product) => ({ product }),

    SET_ERROR: (keyState, error) => ({ keyState, error }),
    SET_STATE: (keyState, newValue) => ({ keyState, newValue }),
    SET_LOADING: (keyLoading, newValue) => ({ keyLoading, newValue }),
  }
});
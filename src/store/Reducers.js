import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

//import { auth } from '../services/Auth//AuthActions';
import reducerInvoice from '../services/Invoice/InvoiceReducer';

const appReducer = (history) => combineReducers({
  router: connectRouter(history),
  invoice: reducerInvoice,
});

const rootReducer = (history) => {
  return (state, action) => {
    //if (action.type == auth.logout) state = undefined;
    return appReducer(history)(state, action);
  };
};
export default rootReducer;
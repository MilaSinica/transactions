import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import merchantsReducer from './merchantsReducer';
import customersReducer from './customersReducer';

const rootReducer = combineReducers({
  form: formReducer,
  customers: customersReducer,
  merchants: merchantsReducer,
});

export default rootReducer;

import { combineReducers } from 'redux';
import scopesReducer from './scopes';

export default combineReducers({
  scopes: scopesReducer
});

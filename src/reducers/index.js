import { combineReducers } from 'redux';
import unitReducer from './unit';

export default combineReducers({
  unit: unitReducer,
});

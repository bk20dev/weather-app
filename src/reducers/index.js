import { combineReducers } from 'redux';
import unitReducer from './unit';
import weatherReducer from './weather';

export default combineReducers({
  unit: unitReducer,
  weather: weatherReducer,
});

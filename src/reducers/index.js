import { combineReducers } from 'redux';
import locationReducer from './location';
import unitReducer from './unit';
import weatherReducer from './weather';

export default combineReducers({
  unit: unitReducer,
  location: locationReducer,
  weather: weatherReducer,
});

/* The combineReducers helper function turns an object whose values are different reducing functions
 into a single reducing function you can pass to createStore. */

import { combineReducers } from 'redux';

import user from './user';

export default combineReducers({
  user,
});

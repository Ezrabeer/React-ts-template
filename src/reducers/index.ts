import { combineReducers } from 'redux';
import { History } from 'history';
import { connectRouter } from 'connected-react-router';

// Here we define and export the root reducer for the project
export const createRootReducer = (history: History) => combineReducers({
  // pass history to the connectRouter method
  router: connectRouter(history),
});
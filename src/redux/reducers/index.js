import { combineReducers } from 'redux';
import authSlice from './authSlice';
import counterSlice from './counterSlice';
import notesSlice from './notesSlice';
import types from '../types';

const appReducer = combineReducers({
  authSlice,
  counterSlice,
  notesSlice
  
  
});

const rootReducer = (state, action) => {
  if (action.type === types.CLEAR_REDUX_STATE) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;

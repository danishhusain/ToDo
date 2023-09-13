// import { combineReducers } from 'redux';
// import authSlice from "./authSlice";
// import counterSlice from "./counterSlice";
// import types from '../types';

// const appReducer = combineReducers({
//     //add all reducers
//     authSlice,
//     counterSlice
    
    
// });
// const rootReducer = (state: any, action: any) => {
//     if (action.type == types.CLEAR_REDUX_STATE) {
//         state = undefined;
//     }
//     return appReducer(state, action) 
// }
// export default rootReducer;


import { combineReducers } from 'redux';
import authSlice from './authSlice';
import counterSlice from './counterSlice';
import types from '../types';

const appReducer = combineReducers({
  authSlice,
  counterSlice,
});

const rootReducer = (state, action) => {
  if (action.type === types.CLEAR_REDUX_STATE) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;

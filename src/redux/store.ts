import { configureStore, } from '@reduxjs/toolkit'
import reducer from './reducers'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension'



export const store = configureStore({
    reducer: reducer,
    middleware:[thunkMiddleware]
}
)


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
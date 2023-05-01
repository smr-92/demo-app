import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import applicationReducer from './Applications/reducer';

const middleware = [thunk];

const store = createStore(
  applicationReducer,
  applyMiddleware(...middleware)
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

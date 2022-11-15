import { combineReducers } from 'redux';

import { app } from '../app/reducer';

export const createRootReducer = () => combineReducers({
  app,
});

export type RootReducerType = ReturnType<typeof createRootReducer>;
export type StoreType = ReturnType<RootReducerType>;

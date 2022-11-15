import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';

import { createRootReducer, StoreType } from './reducers';
import rootSaga from './sagas';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [],
  stateReconciler: autoMergeLevel2, // see "Merge Process" section for details.
};

const isDev = process.env.NODE_ENV === 'development';

const sagaMiddleware = createSagaMiddleware();

const middleware: any[] = [
  sagaMiddleware,  
];


if (isDev) {
  middleware.push(createLogger());
}

const rootReducer = createRootReducer();
const reducer = persistReducer<StoreType>(persistConfig, rootReducer);

export const store = configureStore({
  reducer,
  middleware,
  devTools: isDev,
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default {
  store,
  persistor,
  history,
};

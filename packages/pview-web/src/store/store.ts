import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { persistStore, persistReducer } from 'redux-persist';
import { applyMiddleware, createStore, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';

import { StoreType } from './types';
import reducers from './reducers';
import rootSaga from './sagas';

export const history = createBrowserHistory({
  basename: '/',
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [],
  stateReconciler: autoMergeLevel2, // see "Merge Process" section for details.
};

const packages: any[] = [];
const enhancers: any[] = [];

// Saga
const sagaMiddleware = createSagaMiddleware();

// Push middleware that you need for both development and production
packages.push(routerMiddleware(history));
packages.push(sagaMiddleware);

if (process.env.NODE_ENV === 'development') {
  packages.push(createLogger());
  enhancers.push(composeWithDevTools());
}

const middleware = applyMiddleware(...packages);

export const store = createStore(
  persistReducer<StoreType>(persistConfig, reducers),
  compose(middleware, ...enhancers),
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default {
  store,
  persistor,
  history,
};

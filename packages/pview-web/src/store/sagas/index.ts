import { all } from 'redux-saga/effects';
import example from './example';

export default function* rootSaga() {
  yield all([example()]);
  // code after all-effect
}

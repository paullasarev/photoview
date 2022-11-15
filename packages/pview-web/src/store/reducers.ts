import { combineReducers, AnyAction } from 'redux';

import { StoreType } from './types';
// import todosReducer from './features/todos/todosSlice'
// import filtersReducer from './features/filters/filtersSlice'

// const rootReducer = combineReducers<StoreType>({
  // Define a top-level state field named `todos`, handled by `todosReducer`
//   todos: todosReducer,
//   filters: filtersReducer,
// });

const rootReducer = (state: StoreType | undefined = {name: 'test'}, action: AnyAction): StoreType => {
    return state;
}

export default rootReducer

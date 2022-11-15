import { AnyAction, Reducer } from 'redux';

export interface AppState {
    name: string;
}

const appStateDefault: AppState = {
    name: 'pview',
};

export const app: Reducer<AppState, AnyAction> = (state = appStateDefault, action) => {
    return state;
}
  
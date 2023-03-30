import { AnyAction, combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import { IRootState } from '../types';
import modalsReducer from './modalsReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  modals: modalsReducer,
  auths: authReducer,
});

export const reducer = (state: IRootState | undefined, action: AnyAction) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  }
  return rootReducer(state, action);
};

export type RootState = ReturnType<typeof rootReducer>;

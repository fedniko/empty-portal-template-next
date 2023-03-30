import { AnyAction } from 'redux';
import { IAuthReducer } from '../types';

const initialState: IAuthReducer = {
  auth: false,
  status: 'LOGGED_OUT',
};

const authReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'AUTH_LOGIN': {
      return { ...state, auth: true, status: 'LOGGED' };
    }
    case 'AUTH_LOGOUT': {
      return { ...state, auth: false, status: 'LOGGED_OUT' };
    }
    default:
      return state;
  }
};

export default authReducer;

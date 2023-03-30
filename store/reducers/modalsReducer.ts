import { AnyAction } from 'redux';
import { IModalsReducer } from '../types';

const initialState: IModalsReducer = {
  district: false,
  contactUs: false,
};

const modalsReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'DISTRICT_OPEN': {
      return { ...state, district: true };
    }
    case 'DISTRICT_CLOSE': {
      return { ...state, district: false };
    }
    case 'CONTACTUS_OPEN': {
      return { ...state, contactUs: true };
    }
    case 'CONTACTUS_CLOSE': {
      return { ...state, contactUs: false };
    }
    default:
      return state;
  }
};

export default modalsReducer;

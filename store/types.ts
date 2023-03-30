export interface IModalsReducer {
  district: boolean;
  contactUs: boolean;
}

export interface IAuthReducer {
  auth: boolean;
  status: string;
}

export interface IRootState {
  modals: IModalsReducer;
  auths: IAuthReducer;
}

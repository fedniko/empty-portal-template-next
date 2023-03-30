import { Context, createWrapper, MakeStore } from 'next-redux-wrapper';
import { legacy_createStore as createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { reducer } from './reducers';
import { IRootState } from './types';

const devTools: any =
  process.env.NODE_ENV !== 'production' && devToolsEnhancer({});

const makeStore: MakeStore<IRootState | any> = (context: Context) =>
  createStore(reducer, devTools);

const wrapper = createWrapper<IRootState | any>(makeStore);

export default wrapper;

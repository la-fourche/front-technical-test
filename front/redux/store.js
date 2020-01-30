import { applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {createLogger} from "redux-logger";
import reducers from './reducers';

const middleware = applyMiddleware(thunk, createLogger());
const store = createStore(reducers, {
    data: []
}, middleware)

export const initStore = (initialState = {}) => {
  return store;
};

export default store;
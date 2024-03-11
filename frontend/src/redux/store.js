import reducer from "./reducer"
import reducer2 from "./reducer2"
import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {thunk} from 'redux-thunk';

let reducerRoot=combineReducers({reducer,reducer2});
let middleWare=[thunk]
 const store=legacy_createStore(reducerRoot,applyMiddleware(...middleWare));
export {store};
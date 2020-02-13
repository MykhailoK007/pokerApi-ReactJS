import cardReducer from "./Card-reducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleWare from "redux-thunk";

let reducers = combineReducers({
            cards:cardReducer
})

let store = createStore(reducers,applyMiddleware(thunkMiddleWare));


export default store;
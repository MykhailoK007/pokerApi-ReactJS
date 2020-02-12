import cardReducer from "./Card-reducer";
import {combineReducers, createStore} from "redux";


let reducers = combineReducers({
            cards:cardReducer
})

let store = createStore(reducers);


export default store;
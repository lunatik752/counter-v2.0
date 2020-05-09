import {combineReducers, createStore} from "redux";
import {counter1Reducer} from "./counter1Reducer";


let reducers = combineReducers({
    counter1Page: counter1Reducer,
});


const store = createStore(reducers);

window.store = store;
export default store;
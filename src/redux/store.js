import {combineReducers, createStore} from "redux";
import {counter1Reducer} from "./counter1Reducer";
import {counter2Reducer} from "./counter2Reducer";


let reducers = combineReducers({
    counter1Page: counter1Reducer,
    counter2Page: counter2Reducer
});


const store = createStore(reducers);

window.store = store;
export default store;
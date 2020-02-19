import {createStore, combineReducers,applyMiddleware} from 'redux'
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import {reducer as machineReducer} from './reducers/machines'
import {reducer as chartReducer} from './reducers/chart'
import {reducer as calendarReducer} from './reducers/calendar'
import {reducer as detailsReducer} from './reducers/details'
// @ts-ignore
import {reducer as reducerForm} from 'redux-form'

const reducers =combineReducers({
    machines: machineReducer,
    chart: chartReducer,
    calendar: calendarReducer,
    details: detailsReducer,
    form: reducerForm
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)));

export default store;
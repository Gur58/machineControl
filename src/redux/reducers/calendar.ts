import IAction, {AsyncAction} from "./common";
import {machinesAPI} from './../../api/machines'
import {IMachine} from "./machines";
// @ts-ignore
import {isUndefined} from "lodash";

export enum Actions {
    SET_CURRENT_DATE='calendar/SET_CURRENT_DATE',
}

interface ICalendar {
    currentDate: Date
}

const initialState:ICalendar = {
    currentDate: new Date()
};

export const reducer = (state=initialState, action:IAction)=>{
    switch (action.type) {
        case Actions.SET_CURRENT_DATE:
            return {
                ...state,
                currentDate: action.payload
            };
        default:
            return state
    }
};

const setCurrentDateAction = (date: Date) =>{
    return{
        type: Actions.SET_CURRENT_DATE,
        payload: {
            date
        }
    }
};

export const setCurrentDate = (date?: Date) =>(dispatch:any)=>{
    date=isUndefined(date)?new Date():date;
    // @ts-ignore
   dispatch(setCurrentDateAction(date));

};
import IAction, {AsyncAction} from "./common";
import {detailAPI} from './../../api/machines'

export enum Actions {
    LOAD_DETAILS_DATA='details/LOAD_DETAILS_DATA',
}

interface IDetailsData{
    id: number,
    date: number,
    count: number
}

interface IDetails {
    detailsData: IDetailsData[]
    isLoadingDetailsData: boolean
}

const initialState: IDetails = {
    detailsData: [],
    isLoadingDetailsData: false
};

export const reducer = (state=initialState, action:IAction)=>{
    switch (action.type) {
        case `${Actions.LOAD_DETAILS_DATA}${AsyncAction.BEGIN}`:
            return{
                ...state,
                isLoadingDetailsData: true
            };
        case `${Actions.LOAD_DETAILS_DATA}${AsyncAction.END}`:
            return{
                ...state,
                isLoadingDetailsData: false,
                detailsData: action.payload.detailsData
            };
        default:
            return state
    }
};

const endLoadChartDataAction = (detailsData: IDetailsData[]) =>{
    return{
        type: `${Actions.LOAD_DETAILS_DATA}${AsyncAction.END}`,
        payload: {
            detailsData
        }
    }
};

const beginChartDataAction = () =>{
    return{
        type: `${Actions.LOAD_DETAILS_DATA}${AsyncAction.BEGIN}`,
    }
};

export const  loadDetailsData = (id: number, date: Date) => async (dispatch:any)=>{
    dispatch(beginChartDataAction());
    const data=await detailAPI.getDetailsDate(id, date);
    if(data)
    dispatch(endLoadChartDataAction(data))
};

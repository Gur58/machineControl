import IAction, {AsyncAction} from "./common";
import {chartAPI} from './../../api/machines'
import {IMachine} from "./machines";

export enum Actions {
    LOAD_CHART_DATA='chart/LOAD_CHART_DATA',

}
type IChartData = string & number

interface IChart {
    chartData: IChartData[]
    isLoadingChartData: boolean
}

const initialState: IChart = {
    chartData: [],
    isLoadingChartData: false
};

export const reducer = (state=initialState, action: IAction) => {
    switch (action.type) {
        case `${Actions.LOAD_CHART_DATA}${AsyncAction.END}`:
            return{
                ...state,
                isLoadingChartData: false,
                chartData: action.payload.chartData
            };
        case `${Actions.LOAD_CHART_DATA}${AsyncAction.BEGIN}`:
            return{
                ...state,
                isLoadingChartData: true,
            };
        default:
            return state;
    }
};

const endLoadChartDataAction = (chartData: IChartData[]) =>{
    return{
        type: `${Actions.LOAD_CHART_DATA}${AsyncAction.END}`,
        payload: {
            chartData
        }
    }
};

const beginChartDataAction = () =>{
    return{
        type: `${Actions.LOAD_CHART_DATA}${AsyncAction.BEGIN}`,
    }
};

export const  loadChartData = (id: number, date: Date) => async (dispatch:any)=>{
  dispatch(beginChartDataAction());
  const data=await chartAPI.getChartDate(id, date);
  dispatch(endLoadChartDataAction(data))
};

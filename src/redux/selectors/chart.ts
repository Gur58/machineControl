// @ts-ignore
import {get} from 'lodash';
export const getChartData =(state:any)=>{
    return get(state, 'chart.chartData', [])
};

export function getLoadingChartStatus(state:any) {
    return state.chart.isLoadingChartData
}
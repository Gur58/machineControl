// @ts-ignore
import {get} from 'lodash'

export const getDetailsData =(state:any)=>{
    return get(state, 'details.detailsData', [])
};

export function getLoadingDetailsStatus(state:any) {
    return state.details.isLoadingDetailsData
}
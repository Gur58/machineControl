// @ts-ignore
import {get} from 'lodash';

export const getCurrentDate = (state: any)=>{
  return get(state, 'calendar.currentDate', undefined)
};
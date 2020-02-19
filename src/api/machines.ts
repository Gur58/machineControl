import axios from 'axios';
// @ts-ignore
import {isNull} from 'lodash';

const instance = axios.create({
    baseURL: 'http://127.0.0.1:3001',


});

export const machinesAPI:any = {
     getMachines() {
        return  instance.get('/machines').then((responce)=>{
            return responce.data
        })
    }
};

export const chartAPI: any = {
     getChartDate(id: number, date: Date){
        if(isNull(id)) return false;
        const data={
            id,
            date
        };
        return instance.post('/chart', data).then((responce)=>{
            console.log(responce);
            return responce.data
        })
    }
};

export const detailAPI: any = {
    getDetailsDate(id: number, date: Date){
        if(isNull(id)) return false;
        const data={
            id,
            date
        };
        return instance.post('/details', data).then((responce)=>{
            console.log(responce);
            return responce.data
        })
    }
}
import React, {useEffect} from "react";
import style from "./Chart.module.scss"
// @ts-ignore
import {connect} from 'react-redux';
import {getCurrentMachineId} from "../../redux/selectors/machines";
import { Chart as GoogleChart } from "react-google-charts";
import {getChartData} from "../../redux/selectors/chart";
import {getCurrentDate} from "../../redux/selectors/calendar";
import {loadChartData} from "../../redux/reducers/chart";

const Chart:React.FC = (props:any) =>{
    const {currentMachineId,currentDate, loadChartData, chartData} = props;
    useEffect(()=>{
        loadChartData(currentMachineId, currentDate)
    },[currentDate, currentMachineId]);
    return(

        <div className={style.chart}>
            <span className={style.title}>
            Month Statistics
        </span>
            <GoogleChart
                // @ts-ignore
                chartType="AreaChart"
                data={chartData}
                width="100%"
                height="250px"
                legendToggle
                options={
                    {
                        backgroundColor: 'none',
                        colors: ['#6495fa'],
                        hAxis:{
                            textStyle: {
                                color: 'white'
                            },
                            title: 'Day',
                            titleTextStyle:{
                                color: 'white'
                            }
                        },
                        vAxis:{
                            textStyle: {
                                color: 'white'
                            },
                            gridlines: {count: 1, color: 'black'}
                        },
                        legend: {
                            textStyle:{
                                color: 'white'
                            }
                        }
                    }
                }
            />
        </div>
    )
};

function mapStateToProps(state: any) {
    return {
        currentMachineId: getCurrentMachineId(state),
        chartData: getChartData(state),
        currentDate: getCurrentDate(state)
    }
}

const ChartContainer = connect(mapStateToProps,{loadChartData})(Chart);

export {ChartContainer as Chart}
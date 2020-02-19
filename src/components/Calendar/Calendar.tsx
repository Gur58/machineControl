import React, {useEffect} from "react";
import style from "./Calendar.module.scss"
import Calendar from 'react-calendar';
import "./Calendar.scss"
// @ts-ignore
import {connect} from "react-redux";
import {setCurrentDate} from "../../redux/reducers/calendar";

const CalendarComponent:React.FC = (props:any) =>{
    const {setCurrentDate} = props;
    useEffect(()=>{
        setCurrentDate()
    },[])
    return(
        <div className={style.widget}>
            <Calendar
                value={new Date()}
                className='calendar'
                onChange={(value)=>{
                    setCurrentDate(value)}}
            />
        </div>)
};

const CalendarContainer = connect(null, {setCurrentDate})(CalendarComponent);

export default CalendarContainer
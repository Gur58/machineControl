import React, {useEffect} from "react";
import style from './Details.module.scss'
import {getCurrentMachineId} from "../../redux/selectors/machines";
import {getCurrentDate} from "../../redux/selectors/calendar";
// @ts-ignore
import {connect} from 'react-redux'
import {loadDetailsData} from "../../redux/reducers/details";
import {getDetailsData} from "../../redux/selectors/details";
import Table from "react-bootstrap/Table";
import Detail from "./Detail";

const Details = (props:any) =>{
    const {currentMachineId, currentDate, loadDetailsData, detailsData} = props;
    useEffect(()=>{
        loadDetailsData(currentMachineId, currentDate)
    },[currentMachineId, currentDate])
  return(
      <div className={style.widget}>

        <span className={style.title}>
            Details Statistics
        </span>
              <Table striped borderless hover>
                  <thead>
                  <tr>
                      <th>#</th>
                      <th>Time</th>
                      <th>Details number</th>
                  </tr>
                  </thead>
                  <tbody>
                  {detailsData.map((item: any, i:number)=>{
                      return <Detail iteration={i+1} key={item.id} detail={item} />
                  })}
                  </tbody>
              </Table>
      </div>
  )
};

function mapStateToProps(state: any) {
    return {
        currentMachineId: getCurrentMachineId(state),
        detailsData: getDetailsData(state),
        currentDate: getCurrentDate(state)
    }
}

const DetailsContainer = connect(mapStateToProps, {loadDetailsData})(Details);

export {DetailsContainer as Details}


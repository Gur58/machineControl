import React from 'react';
import Header from "./components/Header/Header";
import Row from "react-bootstrap/Row"
import Container  from "react-bootstrap/Container"
import Col  from "react-bootstrap/Col"
import {Machines} from "./components/Machines/Machines";
// @ts-ignore
import {connect} from "react-redux";
import Preloader from "./components/Preloader/Preloader";
import {getLoadingMachinesStatus} from "./redux/selectors/machines"
import {Chart} from "./components/Chart/Chart";
import CalendarContainer from "./components/Calendar/Calendar";
import {Details} from "./components/Details/Details";
import {getLoadingDetailsStatus} from "./redux/selectors/details";
import {getLoadingChartStatus} from "./redux/selectors/chart";


const App:React.FC = (props:any)=>{
    const {isLoadingMachines, isLoadingDetails, isLoadingChart}=props
  return(
      <Container fluid={true}>
        <Row>
      <Header/>
      </Row>
        {(isLoadingMachines || isLoadingChart || isLoadingDetails)?<Preloader/>:null}
        <Row>
          <Col md={8}>
            <Chart/>
            <Details/>
          </Col>
          <Col md={4}>
            <Machines/>
            <CalendarContainer/>
          </Col>
        </Row>
      </Container>
  )
};
function mapStateToProps(state: any) {
  return {
    isLoadingMachines: getLoadingMachinesStatus(state),
    isLoadingDetails: getLoadingDetailsStatus(state),
    isLoadingChart: getLoadingChartStatus(state),

  }
}

const AppContainer = connect(mapStateToProps)(App)
export {AppContainer as App}


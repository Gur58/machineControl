import React, {useEffect} from "react";
// @ts-ignore
import {connect} from "react-redux";
import {getMachinesList, getCurrentMachine} from "./../../redux/selectors/machines"
import {loadMachines, IMachine, setCurrentMachines} from "./../../redux/reducers/machines"
import style from "./Machines.module.scss";
import Machine from "./Machine";
import Table from "react-bootstrap/Table";

const Machines:React.FC = (props:any)=>{
    const {machines, loadMachines, setCurrentMachines, currentMachine} = props;
    useEffect(()=>{
        loadMachines()
        },[]);

    const handleCurrentMachine = (machine: IMachine)=>{
        setCurrentMachines(machine)
    };
    return(
        <>
            {machines.length>0?
        <div className={style.widget}>
        <span className={style.title}>
            Machines
        </span>
        <Table striped borderless hover>
            <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Location</th>
            </tr>
            </thead>
            <tbody>
                {machines.map((item: any, i:number)=>{
                    return <Machine iteration={i+1} currentMachine={currentMachine} key={item.id} machine={item} onClick={handleCurrentMachine} />
                })}
            </tbody>
        </Table>
        </div>:null}
            </>
    )
};
function mapStateToProps(state:any) {
    return {
        machines: getMachinesList(state),
        currentMachine: getCurrentMachine(state)
    }
}
const mapDispatchToProps = {
    loadMachines,
    setCurrentMachines
}

const MachinesContainer = connect(mapStateToProps, mapDispatchToProps)(Machines)
export  {MachinesContainer as Machines}
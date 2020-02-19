import style from "./Machines.module.scss"
import React from "react";
var classNames = require('classnames');


const Machine = (props:any) =>{
    //const {id, name, location} = props.machine;
    const {machine:{id, name, location}, currentMachine, onClick, iteration} = props;
    let active = classNames({[style.active]: currentMachine!==undefined && currentMachine.id===id?true:false})
    return(
        <tr className={active} onClick={()=>{onClick(props.machine)}}>
            <th>{iteration}</th>
            <th>{name}</th>
            <th>{location}</th>
        </tr>
    )
};

export default Machine
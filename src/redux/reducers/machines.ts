import IAction, {AsyncAction} from "./common";
import {machinesAPI} from './../../api/machines'

export interface IMachine{
    id: number,
    name: string,
    location: string
}

interface IMachines {
    machines: IMachine[],
    currentMachines?: IMachine,
    isLoadingMachines: boolean
}


const initialState: IMachines= {
    machines:[],
    currentMachines: undefined,
    isLoadingMachines: true

};

export enum Actions {
    LOAD_MACHINES='machines/LOAD_MACHINES',
    SET_CURRENT_MACHINE='machines/SET_CURRENT_MACHINE'

}

export const reducer = (state:IMachines=initialState, action:IAction)=>{
    switch (action.type) {
        case `${Actions.LOAD_MACHINES}${AsyncAction.BEGIN}`:
            return {
                ...state,
                isLoadingMachines: true
            }
        case `${Actions.LOAD_MACHINES}${AsyncAction.END}`:
            return {
                ...state,
                isLoadingMachines: false,
                machines: action.payload.machines
            };
        case Actions.SET_CURRENT_MACHINE:
            return {
                ...state,
                currentMachines: action.payload
            };
        default:
            return state
    }

};

const endLoadMachinesAction = (machines: IMachine[]) =>{
    return{
        type: `${Actions.LOAD_MACHINES}${AsyncAction.END}`,
        payload: {
            machines
        }
    }
};

const beginLoadMachinesAction = () =>{
    return{
        type: `${Actions.LOAD_MACHINES}${AsyncAction.BEGIN}`,
    }
};

const setCurrentMachineAction = (machine: IMachine) =>{
    return{
        type: Actions.SET_CURRENT_MACHINE,
        payload: machine
    }
};

const presetCurrentMachines = (dispatch:any, getState:any)=>{
    console.log(getState());
    const currentMachine = getState().machines.machines[0];
    dispatch(setCurrentMachineAction(currentMachine))

};

export const setCurrentMachines = (currentMachine: IMachine) => (dispatch:any, getState:any)=>{
    dispatch(setCurrentMachineAction(currentMachine))
};

export  const loadMachines = ()=> async (dispatch: any, getState:any)=>{
    dispatch(beginLoadMachinesAction());
    const machinesList = await machinesAPI.getMachines();
    dispatch(endLoadMachinesAction(machinesList));
    presetCurrentMachines(dispatch, getState);

};


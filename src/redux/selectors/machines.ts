// @ts-ignore
import {get} from 'lodash';

export function getLoadingMachinesStatus(state:any) {
    return state.machines.isLoadingMachines
}

export function getMachinesList(state:any) {
    return state.machines.machines
}

export function getCurrentMachine(state:any) {
    return state.machines.currentMachines
}

export function getCurrentMachineId(state:any) {
    return get(state, 'machines.currentMachines.id', null)
}
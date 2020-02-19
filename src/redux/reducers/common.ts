export default interface IAction {
    type: string,
    payload?: any
}

export enum AsyncAction {
    BEGIN = "_BEGIN",
    END = "_END",
    ERROR = "_ERROR"

}
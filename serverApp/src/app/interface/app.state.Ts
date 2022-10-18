import {DataState} from "../enum/data.state.enum"
export interface AppState<T> {
    dataste?:DataState;
    AppData?:T;
    error?:string;
}
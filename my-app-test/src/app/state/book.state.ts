export enum BookStateEnum{
    LOADING,LOADED,ERROR
}
export interface BookDataState<T>{
dataState?:BookStateEnum,
data?:T,
MessageError?:string
}
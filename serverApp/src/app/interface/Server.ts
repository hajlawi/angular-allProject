import {Status} from "../enum/status";

export interface Server{
    id:number;
    ipAdresse:string;
    name:string;
    type:string;
    imgUrl:string;
    status:Status;

}
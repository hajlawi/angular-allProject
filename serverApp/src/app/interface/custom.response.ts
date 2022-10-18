import { Status } from "../enum/status";
import { Server } from './Server';

export interface CustomResponse{
    timeStamp:Date;
    statusCode:number;
    satus:Status;
    reson:string;
    message:string;
    DeveloperMessage:string;
    data:{servers?:Server[],server?:Server}
}
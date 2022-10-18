import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError,  observable,  Observable, subscribeOn, Subscriber, throwError } from "rxjs";
import { Status } from "../enum/status";
import { CustomResponse } from './../interface/custom.response';
import { Server } from './../interface/Server';
@Injectable({providedIn:'root'})
export class ServerService{
   constructor(private http:HttpClient){}
      private  readonly apiUrl="";
servers$=<Observable<CustomResponse>>
this.http.get<CustomResponse>(`${this.apiUrl}/server/list`)
.pipe(catchError(this.handleError));

ping$ =(ipAdresse:string)=><Observable<CustomResponse>>
this.http.get<CustomResponse>(`${this.apiUrl}/server/list/${ipAdresse}`)
.pipe(catchError(this.handleError));

delete$ =(serverId:string)=><Observable<CustomResponse>>
this.http.get<CustomResponse>(`${this.apiUrl}/server/list/${serverId}`)
.pipe(catchError(this.handleError));
   save$=(server:Server)=><Observable<CustomResponse>>
   this.http.post<CustomResponse>(`${this.apiUrl}/server/save`,server)
   .pipe(catchError(this.handleError));
    
   filter$=(status:Status,response:CustomResponse)=><Observable<CustomResponse>>
    new Observable<CustomResponse>(
        Subscriber=>{
Subscriber.next(status===Status.ALL?{...response,message:`message filtred by ${status} status`}:
{
    ...response,
    message:response.data.servers
    .filter(server=>server.status===status).length>0?`servers filtred by ${status===Status.SERVER_UP?'server_up':'server_down'} status`
    :`no server of${status} found`,
    data:{servers:response.data.servers?.filter(server=>server.status===status)}
});
Subscriber.complete()
        }
    );
   handleError(error:HttpErrorResponse):Observable <never>{
       return throwError(`anyError=${error.status}`);

   }
}
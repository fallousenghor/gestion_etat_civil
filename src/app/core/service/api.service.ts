import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 
  constructor( private http:HttpClient) { }

  private formatErrors(error:any){
    return throwError(error.error)
  }
  get(path:string, params:HttpParams =new HttpParams()):Observable<any>{
    return this.http.get(path,{params}).pipe(catchError(this.formatErrors))
  }
  put(path:string, body:Object ={}):Observable<any>{
    return this.http.put(path,JSON.stringify(body), ).pipe(catchError(this.formatErrors))
  }
  post(path:string, body:Object ={}):Observable<any>{
    return this.http.post(path,JSON.stringify(body), ).pipe(catchError(this.formatErrors))
  }
  delete(path:string):Observable<any>{
    return this.http.delete(path).pipe(catchError(this.formatErrors))
  }
}

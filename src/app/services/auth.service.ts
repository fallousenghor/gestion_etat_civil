import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, map, Observable, of } from 'rxjs';
import { ApiService } from '../core/service/api.service';
import { error } from 'console';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public login_url = " https://backend-gec.onrender.com/user";
  public reg_url = " https://backend-gec.onrender.com";
  private isLoggIn = false;

  constructor(private http: HttpClient, private router : Router,private apiService:ApiService) { }

   
     
  login(email:string  ): Observable<any> {
     return this.http.get<any[]>(`${this.login_url}?email=${email}`)
     .pipe(
      map(user=>{
        if(user.length > 0){
          localStorage.setItem('user',JSON.stringify(user[0]));
          return user[0];
        }else{
          throw new Error('Email ou password incorrect');
        }
      }),
       catchError(error => {
        console.error('login failed',error);
        return of(null);
       })
     );
  }

  
  // authLogin(user_name:any, password:any):Observable<any>{
  //   return this.apiService.get(this.login_url+'/user?email='+user_name+'&password='+password);
  // }

  // userRegister(user_dto:any):Observable<any>{
  //   return this.apiService.post(this.reg_url+'/user',user_dto)
  // }

  // adminLogin(user_name:any, password:any):Observable<any>{
  //   return this.apiService.get(this.login_url+'/user?email='+user_name+'&password='+password+'&role=admin');
  // }

  

}

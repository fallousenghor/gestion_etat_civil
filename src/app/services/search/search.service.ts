import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

   private searchSubject = new BehaviorSubject<string>('');
   searchText$ = this.searchSubject.asObservable();

   setSearchText(text:string){
    this.searchSubject.next(text)
   }
}

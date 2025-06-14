import { Injectable } from '@angular/core';
import { Extrait, Residence } from '../../models/extrait';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResidenceService {

  private apiUrl = 'https://backend-gec.onrender.com/residence';

  residence!: Residence;

  constructor(private http: HttpClient) { }

  getResidences():Observable<Residence>{
    return this.http.get<Residence>(this.apiUrl);
  }

  addResidence(residence:Residence):Observable<Residence>{
    return this.http.post<Residence>(this.apiUrl,residence);  
  }

  updateResidence(residence: Residence):Observable<Residence> {
    return this.http.put<Residence>(`${this.apiUrl}/${residence.id}`, residence); 
  }

  getResidence(id:String):Observable<Residence>{
    return this.http.get<Residence>(`${this.apiUrl}/${id}`);
  }
}

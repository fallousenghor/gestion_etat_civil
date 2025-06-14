import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Extrait } from '../models/extrait';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExtraitService {

  private apiUrl = 'https://backend-gec.onrender.com/mairie';

  extrait!: Extrait;

  constructor(private http: HttpClient) { }

  getExtraits():Observable<Extrait>{
    return this.http.get<Extrait>(this.apiUrl);
  }

  addExtrait(extrait:Extrait):Observable<Extrait>{
    return this.http.post<Extrait>(this.apiUrl,extrait);  
  }

  updateExtrait(extrait: Extrait):Observable<Extrait> {
    return this.http.put<Extrait>(`${this.apiUrl}/${extrait.id}`, extrait); 
  }

  getExtrait(id:String):Observable<Extrait>{
    return this.http.get<Extrait>(`${this.apiUrl}/${id}`);
  }

  getArticles(searchValue: string): Observable<Extrait[]>{
    return this.http.get<Extrait[]>(
      `apiUrl/extrait?prenom_like=${searchValue}`
    );
  }
}

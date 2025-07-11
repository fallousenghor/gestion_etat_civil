import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewEtudiantService {

  private apiUrl = 'https://backend-gec.onrender.com';

  constructor(private http: HttpClient) { }

  addExtrait(etudiant: any): Observable<any> {
    return this.http.post(this.apiUrl, etudiant);
  }

  modifierEtudiant(id: number, etudiant: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, etudiant);
  }

  obtenirEtudiant(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  getEtudiants(): Observable<any> {
    return this.http.get(`${this.apiUrl}/etudiants`);
  }
  
}

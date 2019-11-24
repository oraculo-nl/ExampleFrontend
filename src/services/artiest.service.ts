import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Artiest } from 'src/domain/artiest';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArtiestService {

  httpOptions = { headers: new HttpHeaders({ 'Content-type': 'application/json' }) }
  
  constructor(private http:HttpClient) { }

  public retrieveAll():Observable<Artiest[]>{
    return this.http.get<Artiest[]>(`${environment.popsongsUrl}artiest`);
  }

}

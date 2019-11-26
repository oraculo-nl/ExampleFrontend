import { Injectable } from '@angular/core';
import { Hit } from 'src/domain/hit';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HitService {

  httpOptions = { headers: new HttpHeaders({ 'Content-type': 'application/json' }) }
  
  constructor(private http:HttpClient) { }

  public retrieveAll():Observable<Hit[]>{
    return this.http.get<Hit[]>(`${environment.popsongsUrl}hit`);
  }
}

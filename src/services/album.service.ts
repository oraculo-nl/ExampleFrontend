import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from 'src/domain/album';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  httpOptions = { headers: new HttpHeaders({ 'Content-type': 'application/json' }) }

  constructor(private http:HttpClient) { }

  public retrieveAll():Observable<Album[]>{
    return this.http.get<Album[]>(`${environment.popsongsUrl}album`);
  }

  public findByNaam(naam: string):Observable<Album[]>{
    return this.http.get<Album[]>(`${environment.popsongsUrl}album/naam/${naam}`);
  }

}

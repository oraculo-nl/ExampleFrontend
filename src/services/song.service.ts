import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Song } from 'src/domain/song';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  httpOptions = { headers: new HttpHeaders({ 'Content-type': 'application/json' }) }
  
  constructor(private http:HttpClient) { }

  public retrieveAll():Observable<Song[]>{
    return this.http.get<Song[]>(`${environment.popsongsUrl}song`);
  }

}

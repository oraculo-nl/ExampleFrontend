import { Component, OnInit } from '@angular/core';
import { Artiest } from 'src/domain/artiest';
import { ArtiestService } from 'src/services/artiest.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-new-album',
  templateUrl: './new-album.component.html',
  styleUrls: ['./new-album.component.css']
})
export class NewAlbumComponent implements OnInit {

  artiesten : Artiest[];
  constructor(private artiestService:ArtiestService) { }

  ngOnInit() {
console.log(this.artiesten);
    this.artiestService.retrieveAll().subscribe(
      (artiesten: Artiest[]) => this.artiesten = artiesten,
      (error: HttpErrorResponse) => alert("Er is een fout opgetreden: " + error.status + " " + error.error + "\n" + "\nMessage:\n" + error.message),
      () => {console.log("artiesten opgehaald"); }
    )
    console.log(this.artiesten);    
  }

}

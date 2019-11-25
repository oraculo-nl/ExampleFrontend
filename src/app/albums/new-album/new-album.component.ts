import { Component, OnInit } from '@angular/core';
import { Artiest } from 'src/domain/artiest';
import { ArtiestService } from 'src/services/artiest.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AlbumService } from 'src/services/album.service';
import { Album } from 'src/domain/album';

@Component({
  selector: 'app-new-album',
  templateUrl: './new-album.component.html',
  styleUrls: ['./new-album.component.css']
})
export class NewAlbumComponent implements OnInit {

  artiesten : Artiest[];
  selectedArtiest: Artiest;
  naam: string;
  jaar: number;
  constructor(private artiestService:ArtiestService, private albumService:AlbumService) { }

  ngOnInit() {
console.log(this.artiesten);
    this.artiestService.retrieveAll().subscribe(
      (artiesten: Artiest[]) => this.artiesten = artiesten,
      (error: HttpErrorResponse) => alert("Er is een fout opgetreden: " + error.status + " " + error.error + "\n" + "\nMessage:\n" + error.message),
      () => {console.log("artiesten opgehaald"); }
    )
    console.log(this.artiesten);    
  }

  public select() {
    console.log("bla");
    console.log(this.selectedArtiest);
  }

  public createAlbum() {
    var album:Album = new Album(null,this.naam, this.jaar, this.selectedArtiest);
    this.albumService.create(album).subscribe(
      (album: Album) => {},
      (error: HttpErrorResponse) => alert("Er is een fout opgetreden: " + error.status + " " + error.error + "\n" + "\nMessage:\n" + error.message),
      () => {console.log("artiesten opgehaald"); }
    )
  }
}

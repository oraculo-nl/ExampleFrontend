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
  album: Album;
  message: string;
  constructor(private artiestService:ArtiestService, private albumService:AlbumService) { }

  ngOnInit() {
console.log(this.artiesten);
    this.artiestService.retrieveAll().subscribe(
      (artiesten: Artiest[]) => this.artiesten = artiesten,
      (error: HttpErrorResponse) => alert("Er is een fout opgetreden: " + error.status + " " + error.error + "\n" + "\nMessage:\n" + error.message),
      () => {console.log("artiesten opgehaald"); this.selectedArtiest=this.artiesten[0]}
    )
       
  }

  public select() {
    console.log(this.selectedArtiest);
  }

  public createAlbum() {
    this.album = new Album(null,this.naam, this.jaar, this.selectedArtiest);
    this.albumService.create(this.album).subscribe(
      (album: Album) => {this.createSuccess(album)},
      (error: HttpErrorResponse) => alert("Er is een fout opgetreden: " + error.status + " " + error.error.error + "\n" + "\nMessage:\n" + error.message),
      () => {console.log("artiesten opgehaald"); }
    )
    
  }

  public createSuccess(album:Album) {
    if (album.id!=null) 
    {
      this.naam="";
      this.jaar=null;
      this.selectedArtiest=null;
      this.message="Album is aangemaakt: " + new Date().toLocaleTimeString();
    }
  }
}

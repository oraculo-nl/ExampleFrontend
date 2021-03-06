import { Component, OnInit } from '@angular/core';
import { AlbumService } from 'src/services/album.service';
import { Album } from 'src/domain/album';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums: Album[];
  naam: string;

  constructor(private albumService: AlbumService, private router: Router) { }

  ngOnInit() {
    this.naam="%";
  }

  findByNaam() {
     var naam = encodeURI(this.naam);
    console.log(naam);
    this.albumService.findByNaamLike(naam).subscribe(
      (albums: Album[]) => this.albums = albums,
      (error: HttpErrorResponse) => alert("Er is een fout opgetreden: " + error.status + " " + error.error + "\n" + "\nMessage:\n" + error.message),
      () => { }
    )
  }


  newAlbumForm() {
    this.router.navigate(['new-album']);
  }

  updateAlbum(album:Album) {
    this.albumService.album=album;
    this.router.navigate(['update-album']);
  }

  deleteAlbum(album_id:number) {
    this.albumService.delete(album_id).subscribe(
      () => {    this.findByNaam();      },
      (error: HttpErrorResponse) => alert("Er is een fout opgetreden: " + error.status + " " + error.error + "\n" + "\nMessage:\n" + error.message),
      () => { }
    )
  }

}

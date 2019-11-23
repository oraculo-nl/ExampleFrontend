import { Component, OnInit } from '@angular/core';
import { AlbumService } from 'src/services/album.service';
import { Album } from 'src/domain/album';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums: Album[];
  naam: string;

  constructor(private albumService: AlbumService) { }

  ngOnInit() {
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

}

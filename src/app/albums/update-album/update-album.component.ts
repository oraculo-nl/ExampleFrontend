import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from 'src/services/album.service';
import { Album } from 'src/domain/album';
import { HttpErrorResponse } from '@angular/common/http';
import { Artiest } from 'src/domain/artiest';
import { ArtiestService } from 'src/services/artiest.service';

@Component({
  selector: 'app-update-album',
  templateUrl: './update-album.component.html',
  styleUrls: ['./update-album.component.css']
})
export class UpdateAlbumComponent implements OnInit {

  artiesten: Artiest[];
  selectedArtiest: Artiest;
  album: Album;
  constructor(private artiestService: ArtiestService, private activatedRoute: ActivatedRoute, private albumService: AlbumService) { }

  ngOnInit() {
    this.album=this.albumService.album;
    this.artiestService.retrieveAll().subscribe(
      (artiesten: Artiest[]) => this.artiesten = artiesten,
      (error: HttpErrorResponse) => alert("Er is een fout opgetreden: " + error.status + " " + error.error + "\n" + "\nMessage:\n" + error.message),
      () => {
        // console.log("artiest_id: "+this.album.artiest.id);
        this.selectedArtiest = this.artiesten.find(artiest =>artiest.id == this.album.artiest.id);
      }
    )

  }

}

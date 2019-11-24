import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from 'src/domain/album';
import { AlbumService } from 'src/services/album.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  album: Album;

  constructor(private activatedRoute: ActivatedRoute, private albumService: AlbumService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => { this.albumService.findById(params['id']).subscribe(
        (album:Album)=> {this.album=album},
        (fout: HttpErrorResponse)=>alert("Er is een fout opgetreden: "+fout.status + " "+ fout.error+"\n"+"\nMessage:\n"+fout.message),
        ()=>{}
      )
     }      
      , () => { }
      , () => { }
    )
  }

}

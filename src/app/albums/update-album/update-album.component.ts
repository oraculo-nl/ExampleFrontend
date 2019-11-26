import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from 'src/services/album.service';
import { Album } from 'src/domain/album';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-update-album',
  templateUrl: './update-album.component.html',
  styleUrls: ['./update-album.component.css']
})
export class UpdateAlbumComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private albumService: AlbumService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => { this.albumService.findById(params['id']).subscribe(
        (album:Album)=> {this.album=album},
        (fout: HttpErrorResponse)=>alert("Er is een fout opgetreden: "+fout.status + " "+ fout.error+"\n"+"\nMessage:\n"+fout.message),
        ()=>{}
      )
     }      
      , (fout: HttpErrorResponse)=>alert("Er is een fout opgetreden: "+fout.status + " "+ fout.error+"\n"+"\nMessage:\n"+fout.message)
      , () => { }
    )    
  }

}

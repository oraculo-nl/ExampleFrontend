import { Component, OnInit } from '@angular/core';
import { SongService } from 'src/services/song.service';
import { Song } from 'src/domain/song';
import { HttpErrorResponse } from '@angular/common/http';
import { Hit } from 'src/domain/hit';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {

  songs: Song[];
  constructor(private songService:SongService) { }

  ngOnInit() {
    this.songService.retrieveAll().subscribe(
      (songs: Song[]) => this.songs = songs,
      (error: HttpErrorResponse) => alert("Er is een fout opgetreden: " + error.status + " " + error.error + "\n" + "\nMessage:\n" + error.message),
      () => {}
    )

  }

}

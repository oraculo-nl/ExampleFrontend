import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumsComponent } from "./albums/albums.component";
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { NewAlbumComponent } from './albums/new-album/new-album.component';
import { UpdateAlbumComponent } from './albums/update-album/update-album.component';
import { ArtiestenComponent } from './artiesten/artiesten.component';
import { HitsComponent } from './hits/hits.component';
import { SongsComponent } from './songs/songs.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    NewAlbumComponent,
    UpdateAlbumComponent,
    ArtiestenComponent,
    HitsComponent,
    SongsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

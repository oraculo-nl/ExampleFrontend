import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumsComponent } from "./albums/albums.component";
import { NewAlbumComponent } from './albums/new-album/new-album.component';
import { UpdateAlbumComponent } from './albums/update-album/update-album.component';
import { ArtiestenComponent } from './artiesten/artiesten.component';
import { HitsComponent } from './hits/hits.component';
import { SongsComponent } from './songs/songs.component';



const routes: Routes = [
  {
    path: "albums", component: AlbumsComponent
  },
  {
    path: "artiesten", component: ArtiestenComponent
  },
  {
    path: "hits", component: HitsComponent  
  },
  {
    path: "songs", component: SongsComponent  
  },
  {
    path: "new-album", component: NewAlbumComponent
  },
  {
    path: "update-album", component: UpdateAlbumComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

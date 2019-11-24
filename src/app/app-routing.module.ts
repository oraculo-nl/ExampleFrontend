import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumsComponent } from "./albums/albums.component";
import { AlbumComponent } from './album/album.component';
import { NewAlbumComponent } from './albums/new-album/new-album.component';



const routes: Routes = [
  {
    path: "albums", component: AlbumsComponent, children: [
      { path: "album/:id", component: AlbumComponent }]
  },
  {
    path: "new-album", component: NewAlbumComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

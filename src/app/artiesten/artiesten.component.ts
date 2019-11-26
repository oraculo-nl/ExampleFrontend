import { Component, OnInit } from '@angular/core';
import { ArtiestService } from 'src/services/artiest.service';
import { Artiest } from 'src/domain/artiest';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-artiesten',
  templateUrl: './artiesten.component.html',
  styleUrls: ['./artiesten.component.css']
})
export class ArtiestenComponent implements OnInit {

  artiesten: Artiest[];
  constructor(private artiestService: ArtiestService) { }

  ngOnInit() {
    this.artiestService.retrieveAll().subscribe(
      (artiesten: Artiest[]) => this.artiesten = artiesten,
      (error: HttpErrorResponse) => alert("Er is een fout opgetreden: " + error.status + " " + error.error + "\n" + "\nMessage:\n" + error.message),
      () => {}
    )

  }

}

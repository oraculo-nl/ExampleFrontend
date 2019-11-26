import { Component, OnInit } from '@angular/core';
import { ArtiestService } from 'src/services/artiest.service';
import { Hit } from 'src/domain/hit';
import { HttpErrorResponse } from '@angular/common/http';
import { HitService } from 'src/services/hit.service';

@Component({
  selector: 'app-hits',
  templateUrl: './hits.component.html',
  styleUrls: ['./hits.component.css']
})
export class HitsComponent implements OnInit {

  hits: Hit[];
  constructor(private hitService:HitService) { }

  ngOnInit() {
    this.hitService.retrieveAll().subscribe(
      (hits: Hit[]) => this.hits = hits,
      (error: HttpErrorResponse) => alert("Er is een fout opgetreden: " + error.status + " " + error.error + "\n" + "\nMessage:\n" + error.message),
      () => {}
    )

  }

}

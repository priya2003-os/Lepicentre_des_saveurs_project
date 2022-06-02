import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-accueil',
  templateUrl: './page-accueil.component.html',
  styleUrls: ['./page-accueil.component.css'],
})
export class PageAccueilComponent implements OnInit {
  cheminImage: any = '/assets/picture/fraise.png';

  constructor() {}

  ngOnInit(): void {}
}

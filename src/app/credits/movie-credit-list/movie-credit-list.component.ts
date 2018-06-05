import { Component, OnInit, Input } from '@angular/core';
import {  CreditsModel } from '@app/core';
@Component({
  selector: 'app-movie-credit-list',
  templateUrl: './movie-credit-list.component.html',
  styleUrls: ['./movie-credit-list.component.scss']
})
export class MovieCreditListComponent implements OnInit {
  @Input() credits: CreditsModel;
  constructor() {
     }

  ngOnInit() {
  }

}

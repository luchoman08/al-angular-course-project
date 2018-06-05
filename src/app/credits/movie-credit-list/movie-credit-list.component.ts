import { Component, OnInit, Input } from '@angular/core';
import { CreditsService, CreditsModel } from '@app/core';
import { Observable } from 'rxjs/Observable';
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

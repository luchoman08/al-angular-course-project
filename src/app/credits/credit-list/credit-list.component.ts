import { Component, OnInit, Input } from '@angular/core';
import { CreditsService, CreditsModel } from '@app/core';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-credit-list',
  templateUrl: './credit-list.component.html',
  styleUrls: ['./credit-list.component.scss']
})
export class CreditListComponent implements OnInit {
  @Input() credits: CreditsModel;
  constructor() {
     }

  ngOnInit() {
  }

}

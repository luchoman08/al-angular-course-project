import { Component, OnInit } from '@angular/core';
import { Crew, Cast, CreditsService } from '@app/core/';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-credit-detail',
  templateUrl: './credit-detail.component.html',
  styleUrls: ['./credit-detail.component.scss']
})
export class CreditDetailComponent implements OnInit {
  credits$: Observable<{id: string, cast: Cast[], crew: Crew[]}>;
  constructor(private creditsService: CreditsService) {
    this.credits$ = this.creditsService.getMovieCredits('500');
   }

  ngOnInit() {
  }

}

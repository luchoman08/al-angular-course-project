import { Component, OnInit, Input } from '@angular/core';
import { CreditsService, Crew, Cast } from '@app/core';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-credit-list',
  templateUrl: './credit-list.component.html',
  styleUrls: ['./credit-list.component.scss']
})
export class CreditListComponent implements OnInit {
  @Input() public movieId: string;
  credits$: Observable<{id: string, cast: Cast[], crew: Crew[]}>;
  constructor(
     private creditsService: CreditsService) { 
     }

  ngOnInit() {
      this.credits$ = this.creditsService.getMovieCredits(this.movieId);
      this.credits$.subscribe(
        credit => console.log(credit));
  }

}

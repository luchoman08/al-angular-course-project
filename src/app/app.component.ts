import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import 'rxjs/add/operator/filter';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { SearchService } from '@app/core/services/search.service';
import { Movie } from '@app/core/models/';

export class State {
  constructor(public name: string, public population: string, public flag: string) { }
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('sidenav') sidenav: MatSidenav;


  stateCtrl: FormControl;
  filteredStates: Observable<any[]>;
  movies$: Observable<Movie[]>;



    constructor(
      private router: Router,
      private searchService: SearchService,
      public loader: LoadingBarService, private route: ActivatedRoute) {
          this.stateCtrl = new FormControl();
          this.stateCtrl.valueChanges
            .subscribe(
              res =>
              this.movies$ = this.searchService.searchMovies(res)
            );
        }

    ngOnInit() {
      this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0);
  });   }
    close() {
      this.sidenav.close();
    }

}

import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import 'rxjs/add/operator/filter';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import {map, startWith} from 'rxjs/operators';
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
  states: State[] = [
    {
      name: 'Arkansas',
      population: '2.978M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
    },
    {
      name: 'California',
      population: '39.14M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'
    },
    {
      name: 'Florida',
      population: '20.27M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'
    },
    {
      name: 'Texas',
      population: '27.47M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
    }
  ];



    constructor(
      private searchService: SearchService,
      public loader: LoadingBarService, private route: ActivatedRoute) {
          this.stateCtrl = new FormControl();
          this.stateCtrl.valueChanges
            .subscribe(
              res =>
              this.movies$ = this.searchService.searchMovies(res)
            );
        }
        filterStates(name: string) {
          return this.states.filter(state =>
            state.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
        }
    ngOnInit() {    }
    close() {
      this.sidenav.close();
    }

}

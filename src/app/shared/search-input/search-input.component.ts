import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Movie } from '@app/core/models';
import { SearchService } from '@app/core/';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {

  stateCtrl: FormControl;
  filteredStates: Observable<any[]>;
  movies$: Observable<Movie[]>;
  constructor(
    private searchService: SearchService,
    private route: ActivatedRoute) {
        this.stateCtrl = new FormControl();
        this.stateCtrl.valueChanges
          .subscribe(
            res =>
            this.movies$ = this.searchService.searchMovies(res)
          );
      }
  ngOnInit() {
  }

}

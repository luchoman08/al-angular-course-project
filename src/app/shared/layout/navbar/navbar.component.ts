import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../../../core/models/movie.model';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SearchService } from '@app/core/';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  stateCtrl: FormControl;
  filteredStates: Observable<any[]>;
  movies$: Observable<Movie[]>;
  constructor(
    private router: Router,
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

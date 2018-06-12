import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { LoadingBarService } from '@ngx-loading-bar/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { SearchService } from '@app/core/';
import { Movie } from '@app/core/';

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






    constructor(
      private router: Router,
      private route: ActivatedRoute) {
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

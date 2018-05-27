import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import 'rxjs/add/operator/filter';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { MaterialSidenavComponent } from '@app/shared/layout';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('sidenav') sidenav: MatSidenav;
    constructor(
        public loader: LoadingBarService) {}
    ngOnInit() {
    }
    close() {
      this.sidenav.close();
    }

}

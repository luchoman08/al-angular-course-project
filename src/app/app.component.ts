import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy, PopStateEvent } from '@angular/common';
import 'rxjs/add/operator/filter';
import { Router, NavigationEnd, NavigationStart, RouteConfigLoadStart, RouteConfigLoadEnd  } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import PerfectScrollbar from 'perfect-scrollbar';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { MatSidenav } from '@angular/material/sidenav';

declare const $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    private _router: Subscription;
    private lastPoppedUrl: string;
    private yScrollStack: number[] = [];
    @ViewChild('sidenav') sidenav: MatSidenav;

    reason = '';
    close(reason: string) {
      this.reason = reason;
      this.sidenav.close();
    }
    constructor(
        public location: Location,
        private router: Router,
        public loader: LoadingBarService) {}
    ngOnInit() {
    }
}

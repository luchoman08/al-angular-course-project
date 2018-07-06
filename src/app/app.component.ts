import { Component, OnInit } from '@angular/core';

import { Router, NavigationEnd } from '@angular/router';

export class State {
    constructor(
        public name: string,
        public population: string,
        public flag: string
    ) {}
}
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit() {
        /** After each route change, move scroll to top */
        this.router.events.subscribe(evt => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }
}

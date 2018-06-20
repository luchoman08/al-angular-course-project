import { EMPTY_SEARCH_SYMBOL } from '@app/core';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  EMPTY_SEARCH_SYMBOL: string;
  constructor() {
    this.EMPTY_SEARCH_SYMBOL = EMPTY_SEARCH_SYMBOL;
      }

  ngOnInit() {
  }

}

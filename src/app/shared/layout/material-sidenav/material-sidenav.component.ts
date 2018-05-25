import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-material-sidenav',
  templateUrl: './material-sidenav.component.html',
  styleUrls: ['./material-sidenav.component.scss']
})
export class MaterialSidenavComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;

  reason = '';
  constructor() { }
  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }


  ngOnInit() {
  }

}

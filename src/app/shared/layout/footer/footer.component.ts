import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  clicks = 0;
  constructor() { }
  addClick() {
    this.clicks = this.clicks +1 ;
    if( this.clicks >= 5 ) {
      window.location.href = "assets/img/author.png";
      this.clicks  = 0;
    }
  }
  ngOnInit() {
  }

}

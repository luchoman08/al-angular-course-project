import { Component, OnInit, Input } from '@angular/core';
import { KeywordsInterface } from '@app/core';

@Component({
  selector: 'app-movie-keywords-list',
  templateUrl: './movie-keywords-list.component.html',
  styleUrls: ['./movie-keywords-list.component.scss']
})
export class MovieKeywordsListComponent implements OnInit {
  @Input() keywords : KeywordsInterface;
  constructor() { }

  ngOnInit() {
  }

}

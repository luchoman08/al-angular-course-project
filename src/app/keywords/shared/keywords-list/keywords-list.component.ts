import { Component, OnInit, Input } from '@angular/core';
import { KeywordsInterface } from '@app/core';

@Component({
  selector: 'app-keywords-list',
  templateUrl: './keywords-list.component.html',
  styleUrls: ['./keywords-list.component.scss']
})
export class KeywordsListComponent implements OnInit {
  @Input() keywords : KeywordsInterface;
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Genre } from '@app/core';

@Component({
  selector: 'app-genres-list',
  templateUrl: './genres-list.component.html',
  styleUrls: ['./genres-list.component.scss']
})
export class GenresListComponent implements OnInit {
  @Input() genres: Genre[];
  constructor() { }

  ngOnInit() {
  }

}

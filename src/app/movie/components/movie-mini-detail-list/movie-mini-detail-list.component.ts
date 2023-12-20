import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
} from "@angular/core";

import { Movie } from "@app/core";
import { NgxScrollEvent } from "@app/shared/directives";
import { Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";

@Component({
  selector: "app-movie-mini-detail-list",
  templateUrl: "./movie-mini-detail-list.component.html",
  styleUrls: ["./movie-mini-detail-list.component.scss"],
})
export class MovieMiniDetailListComponent implements OnInit {
  @Input() movies: Movie[];
  @Input() slice: number;
  @Input() wrap: boolean;
  @Input() layoutAlign: string;
  @Output() endList: EventEmitter<boolean>;
  private debouncer: Subject<boolean> = new Subject<boolean>();

  constructor() {
    /** Emit each 1000 milliseconds event `end of list` */
    this.debouncer
      .pipe(debounceTime(1000))
      .subscribe((val) => this.endList.emit(val));
    this.endList = new EventEmitter<boolean>();
    this.movies = new Array<Movie>();
  }

  ngOnInit() {
    if (this.slice) {
      this.movies = this.movies.slice(0, this.slice);
    }
  }
  /**
   * Emit `true` when the user has been see all movie details
   *
   * @memberof MovieMiniDetailListComponent
   */
  emitEnd() {
    this.debouncer.next(true);
  }
  /**
   * Handle scroll events and react when the user is at end of component
   *
   * @param {ScrollEvent} event
   * @memberof MovieMiniDetailListComponent
   */
  public handleScroll(event: NgxScrollEvent) {
    if (event.isReachingBottom) {
      this.emitEnd();
    }
  }
}

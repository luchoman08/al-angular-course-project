import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Person } from "@app/core";
import { NgxScrollEvent } from "@app/shared/directives";
import { Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";
@Component({
  selector: "app-people-mini-detail-list",
  templateUrl: "./people-mini-detail-list.component.html",
  styleUrls: ["./people-mini-detail-list.component.scss"],
})
export class PeopleMiniDetailListComponent implements OnInit {
  @Input() people: Person[];
  @Output() endList = new EventEmitter<boolean>();
  private debouncer: Subject<boolean> = new Subject<boolean>();
  constructor() {
    /** Emit each 1000 milliseconds event `end of list` */
    this.debouncer
      .pipe(debounceTime(1000))
      .subscribe((val) => this.endList.emit(val));
  }

  ngOnInit() {}

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

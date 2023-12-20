import { Component, OnInit } from "@angular/core";
import { PeopleService, Person, ResultsInterface } from "@app/core";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";

@Component({
  selector: "app-people-home",
  templateUrl: "./people-home.component.html",
  styleUrls: ["./people-home.component.scss"],
})
export class PeopleHomeComponent implements OnInit {
  loading_results = false;
  people: Person[];
  totalPages: number;
  resultsLength: number;
  page: number;
  constructor(private peopleService: PeopleService) {
    this.page = 0;
    this.resultsLength = 20; // default page size
  }
  updateData() {
    this.peopleService
      .getPopular(this.page)
      .subscribe((peopleResult: ResultsInterface<Person>) => {
        this.people = this.people.concat(peopleResult.results);
        this.totalPages = peopleResult.total_pages;
        this.loading_results = false;
        this.resultsLength = peopleResult.total_results;
        /** Preload next page  */
        this.preloadPage();
      });
  }
  getNextPage() {
    if (!(this.page >= this.totalPages)) {
      this.page = this.page + 1;
      this.loading_results = true;
      this.updateData();
    }
  }
  preloadPage() {
    const nextPage = this.page + 1;
    if (!(nextPage >= this.totalPages)) {
      this.peopleService.getPopular(nextPage);
    }
  }
  ngOnInit() {
    this.peopleService.getPopular().subscribe((peopleResults) => {
      this.people = peopleResults.results;
      this.resultsLength = peopleResults.total_results;
      this.totalPages = peopleResults.total_pages;
      this.people = peopleResults.results;
    });
  }
}

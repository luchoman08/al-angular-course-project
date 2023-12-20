import { Component, OnInit, Input } from "@angular/core";
import { Person, GalleryImagesService } from "@app/core";
import { NgxGalleryImage, NgxGalleryOptions } from "@kolkov/ngx-gallery";
import { Router } from "@angular/router";
import { PeopleService } from "@app/core";

@Component({
  selector: "app-people-gallery",
  templateUrl: "./people-gallery.component.html",
  styleUrls: ["./people-gallery.component.scss"],
})
export class PeopleGalleryComponent implements OnInit {
  @Input() people: Person[];
  selectedImage: NgxGalleryImage;
  gallery: { images: NgxGalleryImage[]; options: NgxGalleryOptions[] };
  constructor(
    private router: Router,
    private galeryImagesService: GalleryImagesService,
    private peopleService: PeopleService
  ) {}

  ngOnInit() {
    this.gallery = this.galeryImagesService.getPeoplePosterDescriptionGallery(
      this.people
    );
    this.selectedImage = this.gallery.images[0];
  }
  /**
   * React at change movie in preview, updated selectedImage (NgxGalleryImage)
   * and make a petition to tmdb of actual movie selected anticipating visit to the
   * selected movie in preview for fast load if visit that
   * @param {{ index: number; image: NgxGalleryImage; }} change
   * @memberof MoviesGalleryComponent
   */
  changeMoviePreview(change: { index: number; image: NgxGalleryImage }) {
    this.selectedImage = change.image;
    this.peopleService.get(this.getIdSelectedPerson());
  }
  /**
   * Obtain person id selected in ngx gallery based in its description
   * than should be the name of the person with his popularity
   * @return person id
   */

  getIdSelectedPerson(): number {
    return this.people.filter(
      (person) => this.selectedImage.description.indexOf(person.name) !== -1
    )[0].id;
  }
  /**
   * On click in preview image redirect to the profile detail
   *
   * @memberof PeopleGalleryComponent
   */
  goToPerson() {
    const idSelectedPerson = this.getIdSelectedPerson();
    this.router.navigate(["./people", idSelectedPerson]);
  }
}

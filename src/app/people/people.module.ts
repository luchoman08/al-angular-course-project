import { NgModule } from "@angular/core";

import { SharedModule } from "@app/shared/shared.module";
import { PeopleRoutingModule } from "@app/people/people-routing.module";
import { PersonDetailComponent } from "@app/people/pages/person-detail/person-detail.component";
import { PersonResolver } from "@app/people/pages/person-detail/person-detail-resolver.service";
import { PeopleService } from "@app/core";
import { PeopleHomeComponent } from "@app/people/pages/people-home/people-home.component";
import { PeopleGalleryComponent } from "@app/people/components/people-gallery/people-gallery.component";
import { PersonCreditsCombinedDetailComponent } from "@app/people/components/person-credits-combined-detail/person-credits-combined-detail.component";
import { PersonCreditsCombinedListComponent } from "@app/people/components/person-credits-combined-list/person-credits-combined-list.component";
import { PeopleMiniDetailComponent } from "@app/people/components/people-mini-detail/people-mini-detail.component";
import { PeopleMiniDetailListComponent } from "@app/people/components/people-mini-detail-list/people-mini-detail-list.component";
import { PeopleSearchComponent } from "@app/people/pages/people-search/people-search.component";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [SharedModule, PeopleRoutingModule, CommonModule],
  declarations: [
    PersonDetailComponent,
    PeopleHomeComponent,
    PeopleGalleryComponent,
    PersonCreditsCombinedDetailComponent,
    PersonCreditsCombinedListComponent,
    PeopleMiniDetailComponent,
    PeopleMiniDetailListComponent,
    PeopleSearchComponent,
  ],
  providers: [PeopleService, PersonResolver],
})
export class PeopleModule {}

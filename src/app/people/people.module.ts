import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared/shared.module';
import { PeopleRoutingModule } from './people-routing.module';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { PersonResolver } from './person-detail/person-detail-resolver.service';
import { PeopleService } from '@app/core';
import { CreditsModule } from '@app/credits/credits.module';
import { PeopleHomeComponent } from './people-home/people-home.component';
import { PeopleGalleryComponent } from './people-gallery/people-gallery.component';

@NgModule({
  imports: [
    SharedModule,
    PeopleRoutingModule,
    CreditsModule
  ],
  declarations: [PersonDetailComponent, PeopleHomeComponent, PeopleGalleryComponent],
  providers: [
    PeopleService,
    PersonResolver
  ]
})
export class PeopleModule { }

import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared/shared.module';
import { PeopleRoutingModule } from './people-routing.module';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { PersonResolver } from './person-detail/person-detail-resolver.service';
import { PeopleService } from '@app/core';
import { CreditsModule } from '@app/credits/credits.module';

@NgModule({
  imports: [
    SharedModule,
    PeopleRoutingModule,
    CreditsModule
  ],
  declarations: [PersonDetailComponent],
  providers: [
    PeopleService,
    PersonResolver
  ]
})
export class PeopleModule { }

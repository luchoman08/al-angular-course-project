import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { PersonResolver } from './person-detail/person-detail-resolver.service';
import { CoreModule, PeopleService } from '@app/core';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    PeopleRoutingModule,
    CoreModule,
    MaterialModule
  ],
  declarations: [PersonDetailComponent],
  providers: [
    PeopleService,
    PersonResolver
  ]
})
export class PeopleModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { PeopleService } from '../core/services/v3';
import { PersonResolver } from './person-detail/person-detail-resolver.service';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    PeopleRoutingModule,
    CoreModule
  ],
  declarations: [PersonDetailComponent],
  providers: [
    PeopleService,
    PersonResolver
  ]
})
export class PeopleModule { }

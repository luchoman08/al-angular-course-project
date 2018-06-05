import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCreditListComponent } from './movie-credit-list/movie-credit-list.component';
import { MovieCreditDetailComponent } from '@app/credits/movie-credit-detail/movie-credit-detail.component';
import { MaterialModule } from '@app/material.module';
import { CoreModule } from '@app/core/';
import { PersonCreditsCombinedComponent } from '@app/credits/person-credits-combined/person-credits-combined.component';
import { PersonCreditsCombinedDetailComponent } from '@app/credits/person-credits-combined-detail/person-credits-combined-detail.component';

import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MovieCreditsResolver } from '@app/credits/movie-credit-list/movie-credit-list-resolver.service';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    SharedModule,
    CoreModule
  ],
  providers: [
    MovieCreditsResolver
  ],
  declarations: [
    MovieCreditListComponent,
    MovieCreditDetailComponent,
    PersonCreditsCombinedComponent,
    PersonCreditsCombinedDetailComponent
  ],
  exports: [
    MovieCreditDetailComponent,
    MovieCreditListComponent,
    PersonCreditsCombinedComponent,
    PersonCreditsCombinedDetailComponent
  ]
})
export class CreditsModule { }

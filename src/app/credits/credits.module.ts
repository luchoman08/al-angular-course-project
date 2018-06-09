import { NgModule } from '@angular/core';
import { MovieCreditListComponent } from './movie-credit-list/movie-credit-list.component';
import { MovieCreditDetailComponent } from '@app/credits/movie-credit-detail/movie-credit-detail.component';
import { PersonCreditsCombinedListComponent } from './person-credits-combined-list/person-credits-combined-list.component';
import { PersonCreditsCombinedDetailComponent } from '@app/credits/person-credits-combined-detail/person-credits-combined-detail.component';

import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MovieCreditsResolver } from '@app/credits/movie-credit-list/movie-credit-list-resolver.service';
@NgModule({
  imports: [
    SharedModule,
    RouterModule
  ],
  providers: [
    MovieCreditsResolver
  ],
  declarations: [
    MovieCreditListComponent,
    MovieCreditDetailComponent,
    PersonCreditsCombinedListComponent,
    PersonCreditsCombinedDetailComponent
  ],
  exports: [
    MovieCreditDetailComponent,
    MovieCreditListComponent,
    PersonCreditsCombinedListComponent,
    PersonCreditsCombinedDetailComponent
  ]
})
export class CreditsModule { }

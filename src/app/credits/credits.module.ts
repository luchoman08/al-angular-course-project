import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditListComponent } from './credit-list/credit-list.component';
import { MovieCreditDetailComponent } from '@app/credits/movie-credit-detail/movie-credit-detail.component';
import { MaterialModule } from '@app/material.module';
import { CoreModule } from '@app/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CreditsResolver } from '@app/credits/credit-list/credit-list-resolver.service';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    SharedModule,
    CoreModule
  ],
  providers: [
    CreditsResolver
  ],
  declarations: [CreditListComponent, MovieCreditDetailComponent],
  exports: [MovieCreditDetailComponent, CreditListComponent]
})
export class CreditsModule { }

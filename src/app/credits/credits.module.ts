import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditListComponent } from './credit-list/credit-list.component';
import { CreditDetailComponent } from './credit-detail/credit-detail.component';
import { MaterialModule } from '@app/material.module';
import { CreditsService } from '../core/services/credits.service';
import { CoreModule } from '@app/core';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    CoreModule
  ],
  declarations: [CreditListComponent, CreditDetailComponent],
  exports: [CreditDetailComponent, CreditListComponent]
})
export class CreditsModule { }

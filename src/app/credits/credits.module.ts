import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditListComponent } from './credit-list/credit-list.component';
import { CreditDetailComponent } from './credit-detail/credit-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CreditListComponent, CreditDetailComponent]
})
export class CreditsModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreditListComponent } from './credit-list/credit-list.component';
import { CreditsResolver } from './credit-list/credit-list-resolver.service';
const routes: Routes = [
  {
    path: ':movieID',
    component: CreditListComponent,
    resolve: {
      credit: CreditsResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditsRoutingModule { }

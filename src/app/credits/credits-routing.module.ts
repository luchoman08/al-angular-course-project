import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieCreditListComponent } from './movie-credit-list/movie-credit-list.component';
import { MovieCreditsResolver } from './movie-credit-list/movie-credit-list-resolver.service';
const routes: Routes = [
  {
    path: ':movieID',
    component: MovieCreditListComponent,
    resolve: {
      credit: MovieCreditsResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditsRoutingModule { }

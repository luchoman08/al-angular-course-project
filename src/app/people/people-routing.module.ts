import { PeopleHomeComponent } from '@app/people/pages/people-home/people-home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonDetailComponent } from '@app/people/pages/person-detail/person-detail.component';
import { PersonResolver } from '@app/people/pages/person-detail/person-detail-resolver.service';
import { PeopleSearchComponent } from '@app/people/pages/people-search/people-search.component';
import { PeopleSearchResolver } from '@app/core/resolvers/people-resolvers';

const routes: Routes = [
  {
    path: '',
    component: PeopleHomeComponent
  },
  {
    path: ':id',
    component: PersonDetailComponent,
    resolve: {
      person: PersonResolver
    }
  },
  {
    path: 'search/:query',
    component: PeopleSearchComponent,
    resolve: {
      peopleResult: PeopleSearchResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }

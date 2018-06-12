import { PeopleHomeComponent } from './people-home/people-home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { PersonResolver } from './person-detail/person-detail-resolver.service';

const routes: Routes = [
  {
    path: ':id',
    component: PersonDetailComponent,
    resolve: {
      person: PersonResolver
    }
  },
  {
    path: '',
    component: PeopleHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }

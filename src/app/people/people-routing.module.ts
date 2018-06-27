import { PeopleHomeComponent } from '@app/people/pages/people-home/people-home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonDetailComponent } from '@app/people/pages/person-detail/person-detail.component';
import { PersonResolver } from '@app/people/pages/person-detail/person-detail-resolver.service';

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

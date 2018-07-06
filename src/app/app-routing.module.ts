import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
    {
      path: 'movies',
      loadChildren: './movie/movie.module#MovieModule'
    },
    {
      path: 'people',
      loadChildren: './people/people.module#PeopleModule'
    },
    {
      path: '',
      redirectTo: '/movies',
      pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

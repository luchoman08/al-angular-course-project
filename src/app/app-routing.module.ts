import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
    {
      path: 'movies',
      loadChildren: () => import('./movie/movie.module').then(m => m.MovieModule)
    },
    {
      path: 'people',
      loadChildren: () => import('./people/people.module').then(m => m.PeopleModule)
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

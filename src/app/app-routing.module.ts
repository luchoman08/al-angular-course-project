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
      path: 'tv',
      loadChildren: './tvshow/tvshow.module#TvShowModule'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

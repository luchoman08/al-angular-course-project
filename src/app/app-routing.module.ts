import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
    { path: 'movies',
      children:
      [
        {
          path: '',
          loadChildren: './movie/movie.module#MovieModule'
        }
      ]
    },
    { path: 'people',
      children:
      [
        {
          path: '',
          loadChildren: './people/people.module#PeopleModule'
        }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

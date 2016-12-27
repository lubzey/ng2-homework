import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TopMoviesComponent } from './top-movies/top-movies.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailComponent } from './detail/movie-detail.component';

const routes: Routes = [
    { path: '', redirectTo: '/top-movies', pathMatch: 'full' },
    { path: 'top-movies', component: TopMoviesComponent },
    { path: 'detail/:id', component: MovieDetailComponent },
    { path: 'movies', component: MoviesComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

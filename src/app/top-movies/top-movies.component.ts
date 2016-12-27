import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { movie } from '../shared/movie';
import { MovieService } from '../shared/movie.service';

@Component({
  selector: 'my-top-movies',
  templateUrl: './top-movies.component.html',
  styleUrls: [ './top-movies.component.css' ]
})
export class TopMoviesComponent implements OnInit {

  movies: movie[] = [];

  constructor(
    private router: Router,
    private heroService: MovieService) {
  }


  ngOnInit(): void {
    this.movies = [{id: 11, name: 'Mr. Nice'},
      {id: 12, name: 'Narco'},
      {id: 13, name: 'Bombasto'},
      {id: 14, name: 'Celeritas'},
      {id: 15, name: 'Magneta'},
      {id: 16, name: 'RubberMan'},
      {id: 17, name: 'Dynama'},
      {id: 18, name: 'Dr IQ'},
      {id: 19, name: 'Magma'},
      {id: 20, name: 'Tornado'}];

    // this.heroService.getMovies()
    //   .then(movies => this.movies = movies.slice(1, 5));
  }

  gotoDetail(movie: movie): void {
    let link = ['/detail', movie.id];
    this.router.navigate(link);
  }
}
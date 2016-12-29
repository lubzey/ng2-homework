import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { movie } from '../shared/models/movie';
import { MovieService } from '../shared/services/movie.service';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: movie[] = [];

  constructor(
    private router: Router,
    private movieService: MovieService) {
  }

  ngOnInit(): void {
    this.movieService.getMovies()
      .subscribe(movies => this.movies = movies.slice(0, 6));

      
  }

  gotoDetail(movie: movie): void {
    let link = ['/' + movie.Title + '/detail'];
    this.router.navigate(link);
  }
}
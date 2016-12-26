import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { movie } from '../shared/movie';
import { MovieService } from '../shared/movie.service';

@Component({
  selector: 'my-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: movie[];
  selectedMovie: movie;

  constructor(
    private router: Router,
    private MovieService: MovieService) { }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.MovieService.create(name)
      .then(movie => {
        this.movies.push(movie);
        this.selectedMovie = null;
      });
  }

  delete(movie: movie): void {
    this.MovieService
      .delete(movie.id)
      .then(() => {
        this.movies = this.movies.filter(h => h !== movie);
        if (this.selectedMovie === movie) { this.selectedMovie = null; }
      });
  }

  getMovies(): void {
    this.MovieService.getMovies().then(movies => this.movies = movies);
  }

  ngOnInit(): void {
    this.getMovies();
  }

  onSelect(movie: movie): void {
    this.selectedMovie = movie;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedMovie.id]);
  }
}
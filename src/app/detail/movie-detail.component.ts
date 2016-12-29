// Keep the Input import for now, we'll remove it later:
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { MovieService } from '../shared/services/movie.service';
import { movie } from '../shared/models/movie';

@Component({
  selector: 'my-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  @Input() movie: movie;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let title = params['Title'];
      this.movieService.getMovie(title);
    });
  }

  goBack(): void {
    this.location.back();
  }
}
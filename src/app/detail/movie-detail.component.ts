// Keep the Input import for now, we'll remove it later:
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { MovieService } from '../shared/movie.service';
import { movie } from '../shared/movie';

@Component({
  selector: 'my-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() movie: movie;

  constructor(
    private heroService: MovieService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.heroService.getMovie(id)
        .then(movie => this.movie = movie);
    });
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.update(this.movie)
      .then(() => this.goBack());
  }
}
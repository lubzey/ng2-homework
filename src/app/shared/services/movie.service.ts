import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs';

import 'rxjs/add/operator/toPromise';

import { movie } from '../models/movie';

@Injectable()
export class MovieService {

    private moviesUrl = 'app/shared/data/movies.ts';  // URL to web api
    private moviesSearchUrl = 'app/movies';  // URL to web api
    private headers = new Headers({ 'Content-Type': 'application/json' });

    movies: movie[];


    constructor(private http: Http) { }

    getMovies() {
        return this.http.get(this.moviesUrl)
            .map(x => x.json());
    }

    getMovie(title: string) {
        return this.getMovies()
            .toPromise()
            .then(movies => movies.find(movie => movie.Title === title));
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
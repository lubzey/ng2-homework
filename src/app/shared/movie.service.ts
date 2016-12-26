import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { movie } from './movie';

@Injectable()
export class MovieService {

    private moviesUrl = 'app/movies';  // URL to web api
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

    create(name: string): Promise<movie> {
        return this.http
            .post(this.moviesUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    update(movie: movie): Promise<movie> {
        const url = `${this.moviesUrl}/${movie.id}`;
        return this.http
            .put(url, JSON.stringify(movie), { headers: this.headers })
            .toPromise()
            .then(() => movie)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.moviesUrl}/${id}`;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    getMovies(): Promise<movie[]> {
        return this.http.get(this.moviesUrl)
            .toPromise()
            .then(response => response.json().data as movie[])
            .catch(this.handleError);
    }

    getMoviesSlowly(): Promise<movie[]> {
        return new Promise<movie[]>(resolve =>
            setTimeout(resolve, 2000)) // delay 2 seconds
            .then(() => this.getMovies());
    }

    getMovie(id: number): Promise<movie> {
        return this.getMovies()
            .then(movies => movies.find(movie => movie.id === id));
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
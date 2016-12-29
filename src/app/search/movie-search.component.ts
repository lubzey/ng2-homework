import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { MovieSearchService } from './movie-search.service';
import { movie } from '../shared/models/movie';

@Component({
    selector: 'movie-search',
    templateUrl: './movie-search.component.html',
    styleUrls: ['./movie-search.component.css'],
    providers: [MovieSearchService]
})
export class MovieSearchComponent implements OnInit {
    movies: Observable<movie[]>;
    private searchTerms = new Subject<string>();

    constructor(
        private movieSearchService: MovieSearchService,
        private router: Router) { }

    // Push a search term into the observable stream.
    search(term: string): void {
        this.searchTerms.next(term);
    }

    ngOnInit(): void {
        this.movies = this.searchTerms
            .debounceTime(300)        // wait for 300ms pause in events
            .distinctUntilChanged()   // ignore if next search term is same as previous
            .switchMap(term => term   // switch to new observable each time
                // return the http search observable
                ? this.movieSearchService.search(term)
                // or the observable of empty movies if no search term
                : Observable.of<movie[]>([]))
            .catch(error => {
                // TODO: real error handling
                console.log(error);
                return Observable.of<movie[]>([]);
            });
    }
    
    gotoDetail(movie: movie): void {
        let link = ['/detail', movie.id];
        this.router.navigate(link);
    }
}

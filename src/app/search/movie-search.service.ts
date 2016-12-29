import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { movie } from '../shared/models/movie';

@Injectable()
export class MovieSearchService {

    constructor(private http: Http) { }
    
    search(term: string): Observable<movie[]> {
        let url = 'http://www.omdbapi.com/?s=' + term + '&y=&plot=short&r=json';
        console.log(url);

        return this.http
            .get(url)
            .map((r: Response) =>
            {
                console.log(r);
                return r.json().data as movie[];
            });
    }
}

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { movie } from '../shared/movie';

@Injectable()
export class HeroSearchService {

    constructor(private http: Http) { }
    
    search(term: string): Observable<movie[]> {
        return this.http
            .get(`app/movies/?name=${term}`)
            .map((r: Response) => r.json().data as movie[]);
    }
}

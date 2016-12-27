import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import './shared/rxjs-extensions';
import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './shared/in-memory-data.service';

import { AppComponent } from './app.component';
import { TopMoviesComponent } from './top-movies/top-movies.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailComponent } from './detail/movie-detail.component';
import { MovieService } from './shared/movie.service';
import { MovieSearchComponent } from './search/movie-search.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        // InMemoryWebApiModule.forRoot(InMemoryDataService),
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        TopMoviesComponent,
        MoviesComponent,
        MovieDetailComponent,
        MovieSearchComponent,
        HeaderComponent,
        FooterComponent
    ],
    providers: [MovieService],
    bootstrap: [AppComponent]
})
export class AppModule { }

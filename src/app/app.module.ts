import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import './shared/rxjs-extensions';
import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService }  from './shared/in-memory-data.service';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailComponent } from './detail/movie-detail.component';
import { MovieService } from './shared/services/movie.service';
import { MovieSearchComponent } from './search/movie-search.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
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

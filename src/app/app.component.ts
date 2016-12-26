import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
   <h1>{{header}}</h1>
   <nav>
    <a routerLink="/top-movies" routerLinkActive="active">top-movies</a>
    <a routerLink="/movies" routerLinkActive="active">movies</a>
    <movie-search></movie-search>
   </nav>
   <router-outlet></router-outlet>
   <h1>{{footer}}</h1>
 `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  header = 'Add header';
  footer = 'Add footer';
  
}

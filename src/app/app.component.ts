import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
   <header></header>
   <nav>
    <a routerLink="/top-movies" routerLinkActive="active">top-movies</a>
    <a routerLink="/movies" routerLinkActive="active">movies</a>
    <movie-search></movie-search>
   </nav>
   <router-outlet></router-outlet>
   <footer></footer>
 `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  footer = 'Add footer';  
}

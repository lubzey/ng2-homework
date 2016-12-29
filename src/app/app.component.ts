import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class='container'>
    <header></header>
    <nav>
     <a routerLink="/movies" routerLinkActive="active">movies</a>
     <a routerLink="/movies" routerLinkActive="active">movies</a>
     <movie-search></movie-search>
    </nav>
   <router-outlet></router-outlet>
   <footer></footer>
  </div>
   
 `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}

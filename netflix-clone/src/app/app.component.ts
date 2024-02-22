import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  navList = ["Home", "TV Shows", "News & Popular", "My List", "Browse by Language"]

  st!: string;
  movieData: any[] = []
  constructor(){
    fetch('https://www.omdbapi.com/?s="movie"&apikey=ce5830c8')
    .then((response) => response.json())
    .then((value) => (this.movieData = value.Search));
  }

  search(){
    fetch(`https://www.omdbapi.com/?s=${this.st}&apikey=ce5830c8`)
    .then((res) => res.json())
    .then((data) => {this.movieData = data.Search});
  }
}

import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../hero-list';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  constructor(private http:HttpClient){
    console.log("I am Here");
    this.loadPosts();
  }

  loadPosts(){
    this.http.get('http://localhost:3000/home').subscribe((res)=>{
      alert(JSON.stringify(res));
    });
  }
}

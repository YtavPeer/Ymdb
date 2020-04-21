import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SearchMoviePipesPipe } from '../search-movie-pipes.pipe';
import { MovieOrderPageComponent } from '../movie-order-page/movie-order-page.component'
import { RegisterComponent } from '../register/register.component'
import { from } from 'rxjs';
import { MovieOrderSerService } from '../movie-order-ser.service';
import { Router, RouterModule } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  providers: [SearchMoviePipesPipe]
})

export class MainPageComponent implements OnInit {


 

  // convert bash 64 to image-----------------------------------------------------------!

// end convert bash 64 to image---------------------------------------------------------!



//bring all movie list data from the server of 
arrMovie: any;



// this should get the data of the movie after its going throw the pipes for searching 
arrMovieAfter: any;

//variable that bring us string from the search bar from the client
mainSearch: any;

// after we see all the list of movies that the client serach- we can click and get the specific movie
selectedMovie: any;

username: any = this.ser2.user1;
password: any = this.ser2.pass1;


SignInn(user: string, password: string){
  if (user == "ytav" && password == "0542772266") {
    alert("hello " + user + " wolcome to your admin")
    this.router.navigate(['/admin-page'])
  }
  else {
    this.username = this.ser2.sign(user, password);
    this.password = this.ser2.pass;

  }


}




movieBook(id3: number, name3: string)
{
  this.ser2.movieOrderName = name3;
  this.ser2.movieOrderId = id3;
  this.router.navigate(['/movie-order-page'])
}



constructor(private h: HttpClient, private ser2: MovieOrderSerService, private router: Router, private sanitizer: DomSanitizer) {
  h.get("https://localhost:44352/api/movie").subscribe(d => this.arrMovie = d);




}

selectMovie(val: any)
{
  this.h.get("https://localhost:44352/api/movie/" + val).subscribe(d => this.selectedMovie = d);
}




ngOnInit(): void {

}

}

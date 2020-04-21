import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { MovieOrderSerService } from '../movie-order-ser.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {


  //bring all movie list data from the server of 


  arrMovie: any;

  arrOrders:any;

  arrUsers: any;





  constructor(private h: HttpClient, private router: Router,private s1:MovieOrderSerService) {

    h.get("https://localhost:44352/api/movie").subscribe(d => this.arrMovie = d);

    h.get("https://localhost:44352/api/Register").subscribe(d => this.arrUsers = d);

   this.arrOrders=s1.showOrders();

  }


  ngOnInit(): void {

    this.h.get("https://localhost:44352/api/movie").subscribe(d => this.arrMovie = d);
    this.arrOrders=this.s1.showOrders();
    
  }



  deleteMovie(id: number) {

    this.h.delete("https://localhost:44352/api/movie/" + id).subscribe();

  }


  UpdateMovie(id: number, name1: string, directorName: string, description: string) {

    this.h.put("https://localhost:44352/api/movie/" + id,{ "Movie_Name": name1+"ggg", "Movie_Director": directorName+"ggg", "Movie_Description": description+"ggg" }).subscribe(
      f =>
        setTimeout(() => {
          this.router.navigate(['/main-page'])
        }, 2000)

    );





  }





}















import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MovieOrderSerService } from '../movie-order-ser.service';
import { from } from 'rxjs';
import { Time, getLocaleDateTimeFormat } from '@angular/common';

@Component({
  selector: 'app-movie-order-page',
  templateUrl: './movie-order-page.component.html',
  styleUrls: ['./movie-order-page.component.css']
})


export class MovieOrderPageComponent implements OnInit {



  
  


  numberOfTicket:any;
  date:any;
  time:any;



movieId:Number=this.s1.movieOrderId;
moviename:Number=this.s1.movieOrderName;



constructor(private s1:MovieOrderSerService) { }



Book(name1: string, tickets: number, Date: Date, time: Time, userName: string, password: string){


this.s1.addingMovie(this.s1.movieOrderName,tickets,this.date,this.time,this.s1.user,this.s1.pass)

}






  ngOnInit(): void {

  

  }


}

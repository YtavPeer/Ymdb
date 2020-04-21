import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpResponse } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { Time } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class MovieOrderSerService {


  arrOrders: any;
  movieOrderName: any;
  movieOrderId: any;

  arrUser: any;

  user: string;
  pass: string;

  user1: string=this.registered1.get("username");
  pass1: string=this.registered1.get("password");
  

  sign(username: string, password: string):any {
    

    for (let i = 0; i < this.arrUser.length; i++) {
      if (this.arrUser[i].User_Name == username && this.arrUser[i].Password == password) {
        alert("you are now sing in to the system- you can book movie free")
        this.user = username
        this.pass = password  
        // cookies set:
        console.log("login methud ad called..");
        this.registered1.set("username", username);
        this.registered1.set("password", password);
        return username;  
      }
    }
      alert("you are not in the system- please register")
  }


  addingMovie(name1: string, tickets: number, Date: Date, time: Time, user: string, pass: string) {

    alert("booking- please wait few second")

    // add new headers of http
    let h = new HttpHeaders();

    h = h.append("Authorization", "basic "+user+":"+pass);

    console.log(name1, tickets, Date, time, user, pass,h);
    this.http1.post("https://localhost:44352/api/orders",
      { "MovieName": name1, "NumOftickets": tickets, "Date": Date, "Time": time, "UserName": user, "Password": pass},


      {
        headers: h,



      }).subscribe(
        f =>
          setTimeout(() => {
            alert("your reservation are made-enjoy your movie")
            this.http1.get("https://localhost:44352/api/orders").subscribe(t => this.arrOrders = t);

            this.router.navigate(['/admin-page'])
          }, 2000)

      )

  }


  showOrders(): any {

    return this.arrOrders;

  }


  constructor(private http1: HttpClient, private router: Router, private registered1: CookieService) {

    http1.get("https://localhost:44352/api/orders").subscribe(t => this.arrOrders = t);

    http1.get("https://localhost:44352/api/Register").subscribe(m => this.arrUser = m);


  }



}

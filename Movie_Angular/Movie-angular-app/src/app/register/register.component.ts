import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  addUser(firstName: string, lastName: string, CreditCard: string, T_Zz: string, userName: string, password: string) {

    alert("adding user, please wait")
    this.http.post("https://localhost:44352/api/Register", {

      "First_Name": firstName, "Last_Name": lastName, "Credit_Card": CreditCard, "T_Z": T_Zz, "User_Name": userName, "Password": password

    }).subscribe(
      f =>
        setTimeout(() => {
          alert("your Are now registered to the system, congratulation")

          this.router.navigate(['/main-page'])
        }, 2000)

    )

  }





  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { strict } from 'assert';

import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.css']
})
export class MovieAddComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router,private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }



  selectedFile: File = null;

  bash64: any;

  
  fileName: string;

  filePreview: string;
  


  Upload(event) {

    var reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      var file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        let a: string;
         a=(reader.result.toString().split(',')[1]);
         alert(a)

         this.filePreview=a;
         
         console.log(this.filePreview)

      };
    }
    

    

    }


  






  add(name1: string, directorName: string, description: string) {





    //adding photo
    //const fd = new FormData();
    //fd.append('Data_Image',this.selectedFile,this.selectedFile.name);

    this.http.post("https://localhost:44352/api/movie",
      {
        "Movie_Name": name1, "Movie_Director": directorName, "Movie_Description": description, "Movie_Image_Name": this.filePreview
      }).subscribe(
        f =>
          setTimeout(() => {
            this.router.navigate(['/admin-page'])
          }, 4000)

      )


  }



}








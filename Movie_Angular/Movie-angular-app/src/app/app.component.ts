import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { SearchMoviePipesPipe } from './search-movie-pipes.pipe';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SearchMoviePipesPipe]
})
export class AppComponent {
  title = 'Movie-angular-app';



}


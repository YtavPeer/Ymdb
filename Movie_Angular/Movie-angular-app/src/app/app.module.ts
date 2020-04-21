import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { SearchMoviePipesPipe } from './search-movie-pipes.pipe';
import {FormsModule} from '@angular/forms';
import { MovieOrderPageComponent } from './movie-order-page/movie-order-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { MovieAddComponent } from './movie-add/movie-add.component';
import {MovieOrderSerService} from './movie-order-ser.service';
import { RegisterComponent } from './register/register.component';
import{CookieService} from 'ngx-cookie-service';


@NgModule({
  declarations: [
    AppComponent,
    SearchMoviePipesPipe,
    MovieOrderPageComponent,
    MainPageComponent,
    AdminPageComponent,
    MovieAddComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule,
    AppRoutingModule
  ],
  providers: [MovieOrderSerService,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }

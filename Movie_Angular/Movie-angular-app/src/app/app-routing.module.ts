import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { ModuleWithProviders } from '@angular/core';
import { MovieOrderPageComponent } from './movie-order-page/movie-order-page.component'
import { MainPageComponent } from './main-page/main-page.component'
import { AdminPageComponent} from './admin-page/admin-page.component'
import { MovieAddComponent} from './movie-add/movie-add.component'
import { RegisterComponent} from './register/register.component'
import { AppComponent } from './app.component'


export const routes: Routes = [
  
  {path: '', redirectTo: 'main-page', pathMatch: 'full'  },
  { path: "main-page", component: MainPageComponent },
  { path: "movie-order-page", component: MovieOrderPageComponent },
  { path: "admin-page", component: AdminPageComponent },
  { path: "movie-add", component: MovieAddComponent },
  { path: "register", component: RegisterComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

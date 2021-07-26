import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HomeComponent } from './components/home/home.component';

const homeRoute = environment.homeRoute;


const routes: Routes = [
  { path: homeRoute, component: HomeComponent },
  { path: '', redirectTo: homeRoute, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

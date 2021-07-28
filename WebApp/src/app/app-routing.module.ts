import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ExperienceComponent } from './pages/experience/experience.component';
import { NixieComponent } from './pages/nixie/nixie.component';
import { PhotomanagerComponent } from './pages/photomanager/photomanager.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

const homeRoute = environment.homeRoute;
const experienceRoute = environment.experienceRoute;
const nixieRoute = environment.nixieRoute;
const photoManagerRoute = environment.photoManagerRoute;

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: homeRoute },
  { path: homeRoute, component: WelcomeComponent },
  { path: experienceRoute, component: ExperienceComponent },
  { path: nixieRoute, component: NixieComponent },
  { path: photoManagerRoute, component: PhotomanagerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ExperienceComponent } from './pages/experience/experience.component';
import { NixieComponent } from './pages/nixie/nixie.component';
import { PhotomanagerComponent } from './pages/photomanager/photomanager.component';
import { IntroComponent } from './pages/intro/intro.component';
import { AcademicComponent } from './pages/academic/academic.component';

const homeRoute = environment.homeRoute;
const experienceRoute = environment.experienceRoute;
const nixieRoute = environment.nixieRoute;
const photoManagerRoute = environment.photoManagerRoute;
const academicRoute = environment.academicRoute;

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: homeRoute },
  { path: homeRoute, component: IntroComponent },
  { path: experienceRoute, component: ExperienceComponent },
  { path: nixieRoute, component: NixieComponent },
  { path: photoManagerRoute, component: PhotomanagerComponent },
  { path: academicRoute, component: AcademicComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

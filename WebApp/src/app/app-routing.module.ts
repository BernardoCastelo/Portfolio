import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AcademicComponent } from './pages/academic/academic.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { IntroComponent } from './pages/intro/intro.component';
import { NixieComponent } from './pages/nixie/nixie.component';
import { PhotomanagerComponent } from './pages/photomanager/photomanager.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';

const homeRoute = environment.homeRoute;
const experienceRoute = environment.experienceRoute;
const nixieRoute = environment.nixieRoute;
const photoManagerRoute = environment.photoManagerRoute;
const porfolioRoute = environment.porfolioRoute;
const academicRoute = environment.academicRoute;

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: homeRoute },
  { path: homeRoute, component: IntroComponent },
  { path: experienceRoute, component: ExperienceComponent },
  { path: nixieRoute, component: NixieComponent },
  { path: photoManagerRoute, component: PhotomanagerComponent },
  { path: academicRoute, component: AcademicComponent },
  { path: porfolioRoute, component: PortfolioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

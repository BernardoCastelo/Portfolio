import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ExperienceComponent } from './pages/experience/experience.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

const homeRoute = environment.homeRoute;
const experienceRoute = environment.experienceRoute;
const projectsRoute = environment.projectsRoute;

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: homeRoute },
  { path: homeRoute, component: WelcomeComponent },
  { path: experienceRoute, component: ExperienceComponent },
  { path: projectsRoute, component: ProjectsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

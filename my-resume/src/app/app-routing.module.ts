import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [{ path: '', component: LandingComponent },
{path: 'resume', component: ResumeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

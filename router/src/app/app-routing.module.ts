import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';
import { LinksComponent } from './links/links.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
    {
      path: 'about',
      component: AboutComponent
    },
    {
      path: 'links',
      component: LinksComponent
    },
    {
      path: 'resume',
      component: ResumeComponent
    }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
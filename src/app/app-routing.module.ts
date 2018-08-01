import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';     
import { TutorialsComponent } from './tutorials/tutorials.component';  
import { DownloadInstallComponent } from './tutorials/download-install/download-install.component';  

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'tutorials',
    component: TutorialsComponent
  },
  {
    path: 'tutorials/download-install',
    component: DownloadInstallComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';     
import { TutorialsComponent } from './tutorials/tutorials.component';  
import { DownloadInstallComponent } from './tutorials/download-install/download-install.component'; 
import { RegisterComponent} from "./tutorials/register/register.component"; 
import { SendingFirstNewsletterComponent } from "./tutorials/sending-first-newsletter/sending-first-newsletter.component";

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
    path: 'tutorials/sending-your-first-newsletter',
    component: SendingFirstNewsletterComponent
  },
  {
    path: 'tutorials/download-install',
    component: DownloadInstallComponent
  },  
  {
    path: 'tutorials/register-sendblaster-free',
    component: RegisterComponent
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

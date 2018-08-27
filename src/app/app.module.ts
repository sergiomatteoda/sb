import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { DownloadInstallComponent } from './tutorials/download-install/download-install.component';
import { DataService } from './data.service';
import { TutorialCardComponent } from './tutorial-card/tutorial-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TutorialsComponent,
    DownloadInstallComponent,
    TutorialCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

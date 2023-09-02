import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgrammingViewComponent } from './programming-view/programming-view.component';
import { AboutViewComponent } from './about-view/about-view.component';
import { VideoGamesComponent } from './video-games/video-games.component';
import { ArtComponent } from './art/art.component';
import { StoriesComponent } from './stories/stories.component';
import { ContactsComponent } from './contacts/contacts.component';
import { TechDemosComponent } from './tech-demos/tech-demos.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgrammingViewComponent,
    AboutViewComponent,
    VideoGamesComponent,
    ArtComponent,
    StoriesComponent,
    ContactsComponent,
    TechDemosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

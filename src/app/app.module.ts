import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgrammingViewComponent } from './programming-view/programming-view.component';
import { AboutViewComponent } from './about-view/about-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgrammingViewComponent,
    AboutViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

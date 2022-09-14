import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProgrammingViewComponent} from "./programming-view/programming-view.component";
import {AboutViewComponent} from "./about-view/about-view.component";

const routes: Routes =
  [
    {path: '', component: AboutViewComponent},
    {path: 'Programming', component: ProgrammingViewComponent},
    {path: 'About', component: AboutViewComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

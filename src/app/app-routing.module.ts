import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {
  ProgrammingViewComponent
} from "./programming-view/programming-view.component";
import {AboutViewComponent} from "./about-view/about-view.component";
import {VideoGamesComponent} from "./video-games/video-games.component";
import {ArtComponent} from "./art/art.component";
import {StoriesComponent} from "./stories/stories.component";
import {ContactsComponent} from "./contacts/contacts.component";

const routes: Routes =
  [
    {path: '', component: AboutViewComponent},
    {path: 'About', component: AboutViewComponent},
    {path: 'Programming', component: ProgrammingViewComponent},
    {path: 'About', component: AboutViewComponent},
    {path: 'VideoGames', component: VideoGamesComponent},
    {path: 'Art', component: ArtComponent},
    {path: 'Stories', component: StoriesComponent},
    {path: 'Contacts', component: ContactsComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

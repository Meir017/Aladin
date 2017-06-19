import { ProfileComponent } from "app/profile/profile.component";
import { FeedComponent } from "app/feed/feed.component";
import { AppComponent } from "app/app.component";
import { Routes } from "@angular/router/router";

export const appRoutes : Routes =  [
  { path: 'profile', component: ProfileComponent },
  { path: 'feed', component: FeedComponent },
  { path: '', redirectTo: '/feed', pathMatch: 'full'}
];
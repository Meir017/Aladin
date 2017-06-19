import { ProfileComponent } from "app/profile/profile.component";
import { AppComponent } from "app/app.component";
import { Routes } from "@angular/router/router";

export const appRoutes : Routes =  [
  { path: 'profile', component: ProfileComponent },
  { path: '', redirectTo: '/profile', pathMatch: 'full'}
];
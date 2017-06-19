import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from "app/app.routes";
import { FeedComponent } from './feed/feed.component';
import { PostComponent } from './post/post.component';

import { MdCardModule, MdListModule, MdGridListModule } from '@angular/material';
import { MainService } from "app/main.service";
import { HttpModule } from "@angular/http";
import { UserService } from "app/user.service";

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    FeedComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdCardModule,
    MdListModule,
    HttpModule,
    MdGridListModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    MainService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

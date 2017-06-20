import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from "app/app.routes";
import { FeedComponent } from './feed/feed.component';
import { PostComponent } from './post/post.component';

import { FlexLayoutModule } from "@angular/flex-layout";
import { MdToolbarModule, MdButtonModule, MdCardModule, MdListModule, MdInputModule } from '@angular/material';
import { MainService } from "app/main.service";
import { HttpModule } from "@angular/http";
import { ADUserService } from "app/ad-user.service";
import { StoreService } from "app/store.service";
import { CreationDialogComponent } from './creation-dialog/creation-dialog.component';
import { SearchPipe } from './search.pipe';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    FeedComponent,
    PostComponent,
    CreationDialogComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    MdToolbarModule,
    MdButtonModule,
    MdCardModule,
    MdListModule,
    MdInputModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  entryComponents: [],
  providers: [
    MainService,
    ADUserService,
    StoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

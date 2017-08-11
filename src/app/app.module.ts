import { PostsService } from '../services/posts.service';
import { HomeComponent } from '../home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent
  ],
  providers: [
    PostsService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

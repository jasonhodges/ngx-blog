import { PostsService } from '../services/posts.service';
import { HomeComponent } from '../home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { MarkdownToHtmlModule } from 'ng2-markdown-to-html';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    MarkdownToHtmlModule.forRoot()
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

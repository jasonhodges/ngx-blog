import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { MarkdownToHtmlModule } from 'ng2-markdown-to-html';

import { AppComponent } from './app.component';
import { NgxBlogModule } from './ngx-blog/ngx-blog.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    HttpModule,
    AppRoutingModule,
    NgxBlogModule,
    MarkdownToHtmlModule.forRoot()
  ],
  declarations: [AppComponent],
  providers: [ ],
  bootstrap: [AppComponent],
})
export class AppModule { }

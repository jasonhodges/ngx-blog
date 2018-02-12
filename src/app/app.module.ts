import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { MarkdownToHtmlModule } from 'ng2-markdown-to-html';

import { AppComponent } from './app.component';
import { NgxBlogModule } from './ngx-blog/ngx-blog.module';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './ngx-blog/containers/header/header.component';
import { FooterComponent } from './ngx-blog/containers/footer/footer.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    HttpModule,
    AppRoutingModule,
    NgxBlogModule,
    MarkdownToHtmlModule.forRoot(),
    FlexLayoutModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  providers: [ ],
  bootstrap: [AppComponent],
})
export class AppModule { }

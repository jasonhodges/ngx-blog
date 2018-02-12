import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MarkdownToHtmlModule } from 'ng2-markdown-to-html';

import { HomeComponent } from './containers/home/home.component';
import { PostsService } from './services/posts.service';
import { PostsComponent } from './components/posts/posts.component';
import { PostModule } from './components/post/post.module';
import { BlogComponent } from './components/blog/blog.component';
import { AboutComponent } from './components/about/about.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [
    CommonModule,
    PostModule.forRoot(),
    MarkdownToHtmlModule.forRoot(),
    FlexLayoutModule
  ],
  exports: [],
  declarations: [
    AboutComponent,
    BlogComponent,
    HomeComponent,
    PostsComponent,
  ],
  providers: [
    PostsService
  ],
})
export class NgxBlogModule {}

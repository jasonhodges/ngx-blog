import { NgModule } from '@angular/core';
import { MarkdownToHtmlModule } from 'ng2-markdown-to-html';
import { HomeComponent } from './containers/home/home.component';
import { Routes } from '@angular/router';
import { PostsService } from './services/posts.service';
import { CommonModule } from '@angular/common';
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
    MarkdownToHtmlModule.forRoot()
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

import { NgModule } from '@angular/core';
import { MarkdownToHtmlModule } from 'ng2-markdown-to-html';
import { HomeComponent } from './containers/home/home.component';
import { Routes } from '@angular/router';
import { PostsService } from './services/posts.service';
import { PostsComponent } from './components/posts/posts.component';
import { CommonModule } from '@angular/common';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [
    CommonModule,
    MarkdownToHtmlModule.forRoot()
  ],
  exports: [],
  declarations: [
    HomeComponent,
    PostsComponent
  ],
  providers: [
    PostsService
  ],
})
export class NgxBlogModule {}

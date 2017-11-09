import { HomeComponent } from './ngx-blog/containers/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PostsComponent } from './ngx-blog/components/posts/posts.component';
import { BlogComponent } from './ngx-blog/components/blog/blog.component';
import { AboutComponent } from './ngx-blog/components/about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'blog/:urlTitle', component: BlogComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: false })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}



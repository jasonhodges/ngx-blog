import { HomeComponent } from './ngx-blog/containers/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PostComponent } from './ngx-blog/components/post/post.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'posts', component: PostComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: false })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}



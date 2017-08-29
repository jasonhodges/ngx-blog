import { HomeComponent } from './ngx-blog/containers/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import {NgModule} from '@angular/core';
import { PostComponent } from './ngx-blog/components/post/post.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'blog', component: PostComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}



var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { MarkdownToHtmlModule } from 'ng2-markdown-to-html';
import { HomeComponent } from './containers/home/home.component';
import { PostsService } from './services/posts.service';
import { PostsComponent } from './components/posts/posts.component';
import { PostModule } from './components/post/post.module';
import { BlogComponent } from './components/blog/blog.component';
import { AboutComponent } from './components/about/about.component';
export var ROUTES = [
    { path: '', component: HomeComponent }
];
var NgxBlogModule = (function () {
    function NgxBlogModule() {
    }
    NgxBlogModule = __decorate([
        NgModule({
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
    ], NgxBlogModule);
    return NgxBlogModule;
}());
export { NgxBlogModule };
//# sourceMappingURL=ngx-blog.module.js.map
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { PostComponent } from './post.component';
import { PostsService } from '../../services/posts.service';
var PostModule = (function () {
    function PostModule() {
    }
    PostModule_1 = PostModule;
    PostModule.forRoot = function () {
        return {
            ngModule: PostModule_1,
            providers: [PostsService]
        };
    };
    PostModule.forChild = function () {
        return {
            ngModule: PostModule_1,
        };
    };
    PostModule = PostModule_1 = __decorate([
        NgModule({
            imports: [],
            exports: [PostComponent],
            declarations: [PostComponent],
            providers: [],
        })
    ], PostModule);
    return PostModule;
    var PostModule_1;
}());
export { PostModule };
//# sourceMappingURL=post.module.js.map
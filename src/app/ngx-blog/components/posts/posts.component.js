var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { PostsService } from '../../services/posts.service';
var PostsComponent = (function () {
    function PostsComponent(postsService) {
        this.postsService = postsService;
        this.mainPosts = [];
    }
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postsService.getPosts().subscribe(function (e) {
            debugger;
            console.log('%c*** COMP: PostsComponent | function ngOnInit ***', 'background-color: blue;color:white;font-style:bold;', e);
            e.entries.map(function (p) {
                _this.tap(p, 'p: ');
                _this.mainPosts.push({
                    title: p.post.attributes.title,
                    body: p.post.body
                });
            });
            console.log('%c*** COMP: PostsComponent | function ngOnInit ***', 'background-color: blue;color:white;font-style:bold;', _this.mainPosts);
        });
    };
    PostsComponent.prototype.tap = function (x, w) {
        console.log("%c  " + (w ? w : '*****'), 'background-color:yellow;color:black;font-style:bold;padding-right: 20px;', x);
        return x;
    };
    ;
    return PostsComponent;
}());
PostsComponent = __decorate([
    Component({
        selector: 'ngxb-posts',
        templateUrl: 'posts.component.html'
    }),
    __metadata("design:paramtypes", [PostsService])
], PostsComponent);
export { PostsComponent };
//# sourceMappingURL=posts.component.js.map
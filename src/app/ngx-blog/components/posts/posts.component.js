var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Router } from '@angular/router';
var PostsComponent = (function () {
    function PostsComponent(postsService, _router) {
        this.postsService = postsService;
        this._router = _router;
        this.postsList = [];
    }
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postsService.getPosts().subscribe(function (e) {
            e.map(function (p) {
                _this.postsList.push({
                    id: p.post.attributes.id,
                    title: p.post.attributes.title,
                    urlTitle: p.post.attributes.urlTitle,
                    description: p.post.attributes.description,
                    body: p.post.body
                });
            });
        });
    };
    PostsComponent.prototype.onSelect = function (id) {
        this._router.navigate(["/blog", id.urlTitle]);
    };
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], PostsComponent.prototype, "showBody", void 0);
    PostsComponent = __decorate([
        Component({
            selector: 'ngxb-posts',
            templateUrl: 'posts.component.html'
        }),
        __metadata("design:paramtypes", [PostsService, Router])
    ], PostsComponent);
    return PostsComponent;
}());
export { PostsComponent };
//# sourceMappingURL=posts.component.js.map
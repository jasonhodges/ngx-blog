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
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../services/posts.service';
var BlogComponent = (function () {
    function BlogComponent(_route, _postsService) {
        this._route = _route;
        this._postsService = _postsService;
        this.id = -1;
    }
    BlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this._route.snapshot.paramMap.get('urlTitle');
        this._postsService.getPosts().subscribe(function (e) { return _this.entries = e; });
        this._postsService.getPost(this.id).subscribe(function (p) { _this.entry = p.post; });
    };
    BlogComponent = __decorate([
        Component({
            selector: 'ngxb-blog',
            templateUrl: 'blog.component.html'
        }),
        __metadata("design:paramtypes", [ActivatedRoute,
            PostsService])
    ], BlogComponent);
    return BlogComponent;
}());
export { BlogComponent };
//# sourceMappingURL=blog.component.js.map
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as marked from 'marked';
var postsUrl = require('../../../assets/_posts/posts.json');
var PostsService = (function () {
    function PostsService(http) {
        this.http = http;
        this.md = marked;
        this.md.setOptions({
            gfm: true,
            breaks: true,
            highlight: function (code) {
                return require('highlightjs').highlightAuto(code).value;
            }
        });
    }
    PostsService.prototype.convert = function (markdown) {
        return this.md.parse(markdown);
    };
    PostsService.prototype.getPosts = function () {
        return this.http.get(postsUrl).map(function (res) { return res.json(); });
    };
    return PostsService;
}());
PostsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], PostsService);
export { PostsService };
//# sourceMappingURL=posts.service.js.map
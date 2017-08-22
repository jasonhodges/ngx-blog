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
import { Http, Response } from '@angular/http';
import * as marked from 'marked';
import { Observable } from 'rxjs/Observable';
var postsUrl = require('../../../assets/_posts/posts.json');
var PostsService = (function () {
    function PostsService(http) {
        this.http = http;
        this.md = marked;
        this.md.setOptions({
            gfm: true,
            breaks: true,
        });
    }
    PostsService.prototype.convert = function (markdown) {
        debugger;
        var raw = markdown.replace(/"/g, '');
        // this.prepare(raw);
        return this.md(raw);
    };
    PostsService.prototype.prepare = function (raw) {
        if (!raw) {
            return '';
        }
        var indentStart;
        return raw
            .replace(/\&gt;/g, '>')
            .split('\n')
            .map(function (line) {
            // find position of 1st non-whitespace character
            // to determine the markdown indentation start
            if (line.length > 0 && isNaN(indentStart)) {
                indentStart = line.search(/\S|$/);
            }
            // remove whitespaces before indentation start
            return indentStart
                ? line.substring(indentStart)
                : line;
        }).join('\n');
    };
    PostsService.prototype.getPosts = function () {
        this.content = this.http.get(postsUrl).map(function (res) { return res.json(); });
        return this.content;
    };
    PostsService.prototype.getSource = function (src) {
        return this.http.get(src)
            .map(this.extractData)
            .catch(this.handleError);
    };
    PostsService.prototype.extractData = function (response) {
        debugger;
        return response.text() || '';
    };
    PostsService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    };
    return PostsService;
}());
PostsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], PostsService);
export { PostsService };
//# sourceMappingURL=posts.service.js.map
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import * as marked from 'marked';
import * as Prism from 'prismjs';
import 'prismjs/prism';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cpp';
import 'prismjs/components/prism-csharp';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-diff';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-sass';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-typescript';
var PostComponent = (function () {
    function PostComponent(postsService, element) {
        this.postsService = postsService;
        this.element = element;
    }
    PostComponent.prototype.ngOnInit = function () { };
    PostComponent.prototype.ngAfterViewInit = function () {
        if (this.data) {
            this.handleData();
            return;
        }
        if (this.src) {
            console.log('src: \n', this.src);
            this.handleSrc();
            return;
        }
        this.handleRaw(this.element.nativeElement.innerHTML);
    };
    // SimpleChanges parameter is required for AoT compilation (do not remove)
    PostComponent.prototype.ngOnChanges = function (changes) {
        if ('data' in changes) {
            this.handleData();
            return;
        }
        if ('src' in changes) {
            this.handleSrc();
            return;
        }
    };
    PostComponent.prototype.handleData = function () {
        this.handleRaw(this.data);
    };
    PostComponent.prototype.handleSrc = function () {
        var _this = this;
        var extension = this.src
            ? this.src.split('.').splice(-1).join()
            : null;
        this.postsService.getSource(this.src)
            .subscribe(function (data) {
            var raw = extension !== 'md'
                ? '```' + extension + '\n' + data + '\n```'
                : data;
            _this.handleRaw(raw);
        });
    };
    PostComponent.prototype.handleRaw = function (raw) {
        var markdown = this.prepare(raw);
        this.element.nativeElement.innerHTML = marked(markdown);
        Prism.highlightAll(false);
    };
    PostComponent.prototype.prepare = function (raw) {
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
    return PostComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], PostComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], PostComponent.prototype, "src", void 0);
PostComponent = __decorate([
    Component({
        selector: 'ngxb-post, [ngxb-post]',
        // templateUrl: 'post.component.html',
        template: "\n    <ng-content></ng-content>",
        encapsulation: ViewEncapsulation.None,
        styleUrls: [
            'theme.scss'
        ]
    }),
    __metadata("design:paramtypes", [PostsService,
        ElementRef])
], PostComponent);
export { PostComponent };
//# sourceMappingURL=post.component.js.map
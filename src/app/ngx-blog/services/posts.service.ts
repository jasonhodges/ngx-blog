import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import * as marked from 'marked';

const postsUrl = require('../../../assets/_posts/posts.json');

@Injectable()
export class PostsService {
  private md: any;

  constructor(public http: Http) {
    this.md = marked;

    this.md.setOptions({
      gfm: true,
      breaks: true,
      highlight: function(code: any) {
        return require('highlightjs').highlightAuto(code).value;
      }
    });
  }

  convert(markdown: string) {
    return this.md.parse(markdown);
  }

  getPosts() {
    return this.http.get(postsUrl).map((res: Response) => res.json());
  }
}

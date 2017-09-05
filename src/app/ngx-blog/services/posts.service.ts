import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import * as marked from 'marked';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

const postsUrl = require('../../../assets/_posts/posts.json');
let postsPromise = Promise.resolve(postsUrl);

@Injectable()
export class PostsService {
  private md: any;
  content: Observable<any>;

  constructor(public http: Http) {
    this.md = marked;

    this.md.setOptions({
      gfm: true,
      breaks: true
    });
  }

  convert(markdown: string) {
    let raw = markdown.replace(/"/g, '');
    return this.md(raw);
  }

  prepare(raw: string) {
    if (!raw) {
      return '';
    }
    let indentStart: number;
    return raw
      .replace(/\&gt;/g, '>')
      .split('\n')
      .map((line: string) => {
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
  }

  getPosts() {
    this.content = this.http.get(postsUrl).map((res: Response) => res.json());
    return this.content;
  }

  getPost(id: number | string): Observable<Post> {
    return this.getPosts().map((posts: any) => posts.find((p: any) => p.post.attributes.id === id));
  }

  getSource(src: string) {
    return this.http.get(src)
      .map(this.extractData)
      .catch(this.handleError);
  }

  extractData(response: Response) {
    return response.text() || '';
  }

  handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}

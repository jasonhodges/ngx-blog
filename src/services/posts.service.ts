import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
const postsUrl = require('../assets/_posts/posts.json');

@Injectable()
export class PostsService {
  constructor(public http: Http) {}

  getPosts() {
    return this.http.get(postsUrl)
    .map((res: Response) => res.json());
  }
}

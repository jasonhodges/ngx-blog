import { PostsService } from '../services/posts.service';
import { Component, OnInit } from '@angular/core';
import * as marked from 'marked';

@Component({
  selector: 'ngxb-home',
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
  posts: any;
  convertedText: string;
  constructor(public postsService: PostsService, public md: PostsService) {}

  ngOnInit() {
    this.postsService.getPosts().subscribe((p) => {
      console.log('posts: ', p);
     this.posts = p.posts;
      console.log(this.posts);
    });
  }

  updateOutput(mdText: string) {
    this.convertedText = this.md.convert(mdText);
  }

}

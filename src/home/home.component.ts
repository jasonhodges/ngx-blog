import { PostsService } from '../services/posts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngxb-home',
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
  posts: any;
  constructor(public postsService: PostsService) {}

  ngOnInit() {
    this.postsService.getPosts().subscribe((p) => {
      console.log('posts: ', p);
     this.posts = p.posts;
      console.log(this.posts);
    });
  }

}

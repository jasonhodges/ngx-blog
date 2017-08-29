import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'ngxb-posts',
  templateUrl: 'posts.component.html'
})

export class PostsComponent implements OnInit {
  mainPosts: any = [];

  constructor(public postsService: PostsService) { }

  ngOnInit() {
    this.postsService.getPosts().subscribe((e) => {
      e.entries.map((p: any) => {
        this.mainPosts.push({
          title: p.post.attributes.title,
          body: p.post.body
        });
      });
    });
  }
}

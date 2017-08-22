import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'posts',
  templateUrl: 'posts.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    'theme.scss'
  ]
})

export class PostsComponent implements OnInit {
  posts: any;

  constructor(public postsService: PostsService) { }

  ngOnInit() {
    this.postsService.getPosts().subscribe((p) => {
      this.posts = p.posts;
    });
  }
}
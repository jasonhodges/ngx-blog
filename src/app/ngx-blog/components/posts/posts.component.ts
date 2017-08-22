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
    this.postsService.getPosts().subscribe((p) => {
      debugger;
console.log('%c*** COMP: PostsComponent | function ngOnInit ***', 'background-color: blue;color:white;font-style:bold;', p)
      p.posts.map((t: any) => {
        this.mainPosts.push({
          title: t.title,
          file: t.file,
          body: this.postsService.convert(t.body)
        });
      });
console.log('%c*** COMP: PostsComponent | function ngOnInit ***', 'background-color: blue;color:white;font-style:bold;', this.mainPosts)
    });
  }
}

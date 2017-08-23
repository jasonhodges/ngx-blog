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
      debugger;
console.log('%c*** COMP: PostsComponent | function ngOnInit ***', 'background-color: blue;color:white;font-style:bold;', e)
      e.entries.map((p: any) => {
  this.tap(p, 'p: ');
        this.mainPosts.push({
          title: p.post.attributes.title,
          body: p.post.body
        });
      });
console.log('%c*** COMP: PostsComponent | function ngOnInit ***', 'background-color: blue;color:white;font-style:bold;', this.mainPosts)
    });
  }

  tap(x: any, w?: string) {
    console.log(`%c  ${ w ? w : '*****'}`, 'background-color:yellow;color:black;font-style:bold;padding-right: 20px;', x);
    return x;
  };
}

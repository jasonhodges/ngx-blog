import { Component, Input, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngxb-posts',
  templateUrl: 'posts.component.html'
})

export class PostsComponent implements OnInit {
  @Input() showBody: boolean;
  postsList: any = [];

  constructor(public postsService: PostsService, private _router: Router) { }

  ngOnInit() {
    this.postsService.getPosts().subscribe((e) => {
      e.map((p: any) => {
        this.postsList.push({
          id: p.post.attributes.id,
          title: p.post.attributes.title,
          urlTitle: p.post.attributes.urlTitle,
          description: p.post.attributes.description,
          body: p.post.body
        });
      });
    });
  }

  onSelect(id: any) {
    this._router.navigate([`/blog`, id.urlTitle ]);
  }
}

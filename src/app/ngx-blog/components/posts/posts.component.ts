import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { tap } from '../../../../../config/util';

@Component({
  selector: 'ngxb-posts',
  templateUrl: 'posts.component.html'
})

export class PostsComponent implements OnInit {
  mainPosts: any = [];
  posts: Observable<Post[]>;

  constructor(public postsService: PostsService, private _router: Router) { }

  ngOnInit() {
    this.postsService.getPosts().subscribe((e) => {
      e.map((p: any) => {
        this.mainPosts.push({
          id: p.post.attributes.id,
          title: p.post.attributes.title,
          urlTitle: p.post.attributes.urlTitle,
          description: p.post.attributes.description,
          body: p.post.body
        });
      });
    });
  }

  onSelect(id: number) {
    tap(id, 'id');
    this._router.navigate(['/blog', id ]);
  }
}

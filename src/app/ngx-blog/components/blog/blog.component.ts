import { Component, OnInit } from '@angular/core';
import { tap } from '../../../../../config/util';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'ngxb-blog',
  templateUrl: 'blog.component.html'
})

export class BlogComponent implements OnInit {
  id: number = -1;
  entry: Post;
  entries: Post[];

  constructor(private _route: ActivatedRoute,
              private _postsService: PostsService) { }


  ngOnInit() {
    this.id = +this._route.snapshot.paramMap.get('id');
    tap(this.id, 'blog id');

    this._postsService.getPosts().subscribe((e: any) => this.entries = e);

    this._postsService.getPost(this.id).subscribe((p: any) => {
      tap(JSON.stringify(p), 'getPost p');
      this.entry = p.post;
      tap(this.entry, 'this.entry');
    });
  }
}

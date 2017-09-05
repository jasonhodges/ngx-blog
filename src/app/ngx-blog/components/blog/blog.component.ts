import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'ngxb-blog',
  templateUrl: 'blog.component.html'
})

export class BlogComponent implements OnInit {
  id: number | string = -1;
  entry: Post;
  entries: Post[];

  constructor(private _route: ActivatedRoute,
              private _postsService: PostsService) { }

  ngOnInit() {
    this.id = this._route.snapshot.paramMap.get('urlTitle');

    this._postsService.getPosts().subscribe((e: any) => this.entries = e);

    this._postsService.getPost(this.id).subscribe((p: any) => { this.entry = p.post; });
  }
}

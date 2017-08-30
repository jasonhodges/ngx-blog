import { PostsService } from '../../services/posts.service';
import { Component, OnInit } from '@angular/core';
import { tap } from '../../../../../config/util';

@Component({
  selector: 'ngxb-home',
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
  posts: any;
  convertedText: string;

  constructor(public postsService: PostsService, public md: PostsService) {}

  ngOnInit() {
  }

}

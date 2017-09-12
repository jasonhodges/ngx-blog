import { PostsService } from '../../services/posts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngxb-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.scss'
  ]
})

export class HomeComponent implements OnInit {
  posts: any;

  constructor(public md: PostsService) {}

  ngOnInit() {
  }

}

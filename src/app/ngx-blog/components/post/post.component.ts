import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import * as marked from 'marked';
import * as Prism from 'prismjs';

import 'prismjs/prism';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cpp';
import 'prismjs/components/prism-csharp';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-diff';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-sass';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-typescript';

@Component({
  selector: 'ngxb-post, [ngxb-post]',
  // templateUrl: 'post.component.html',
  template: `
    <ng-content></ng-content>`,
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    'theme.scss'
  ]
})

export class PostComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() data: string;
  @Input() src: string;

  constructor(public postsService: PostsService,
              public element: ElementRef) { }

  ngOnInit() {  }

  ngAfterViewInit() {
    if (this.data) {
      this.handleData();
      return;
    }
    if (this.src) {
      console.log('src: \n', this.src);
      this.handleSrc();
      return;
    }
    this.handleRaw(this.element.nativeElement.innerHTML);
  }

  // SimpleChanges parameter is required for AoT compilation (do not remove)
  ngOnChanges(changes: SimpleChanges) {
    if ('data' in changes) {
      this.handleData();
      return;
    }
    if ('src' in changes) {
      this.handleSrc();
      return;
    }
  }

  handleData() {
    this.handleRaw(this.data);
  }

  handleSrc() {
    const extension = this.src
      ? this.src.split('.').splice(-1).join()
      : null;
    this.postsService.getSource(this.src)
      .subscribe(data => {
        const raw = extension !== 'md'
          ? '```' + extension + '\n' + data + '\n```'
          : data;
        this.handleRaw(raw);
      });
  }

  handleRaw(raw: string) {
    const markdown = this.prepare(raw);
    this.element.nativeElement.innerHTML = marked(markdown);
    Prism.highlightAll(false);
  }

  prepare(raw: string) {
    if (!raw) {
      return '';
    }
    let indentStart: number;
    return raw
      .replace(/\&gt;/g, '>')
      .split('\n')
      .map((line: string) => {
        // find position of 1st non-whitespace character
        // to determine the markdown indentation start
        if (line.length > 0 && isNaN(indentStart)) {
          indentStart = line.search(/\S|$/);
        }
        // remove whitespaces before indentation start
        return indentStart
          ? line.substring(indentStart)
          : line;
      }).join('\n');
  }
}

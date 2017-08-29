import { ModuleWithProviders, NgModule } from '@angular/core';

import { PostComponent } from './post.component';
import { PostsService } from '../../services/posts.service';

@NgModule({
 imports: [],
 exports: [PostComponent],
 declarations: [PostComponent],
 providers: [],
})
export class PostModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PostModule,
      providers: [PostsService]
    };
  }
  static forChild(): ModuleWithProviders {
    return {
      ngModule: PostModule,
    }
  }
}

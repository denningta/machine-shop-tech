import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostComponent } from './post/post.component';
import { MatIconModule } from '@angular/material/icon';
import { PortableTextModule } from '../shared/portable-text/portable-text.module';



@NgModule({
  declarations: [BlogComponent, PostListComponent, PostComponent],
  imports: [
    CommonModule,
    MatIconModule,
    PortableTextModule,
  ],
  exports: [BlogComponent]
})
export class BlogModule { }

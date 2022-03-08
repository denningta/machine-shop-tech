import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { PostListComponent } from './post-list/post-list.component';



@NgModule({
  declarations: [BlogComponent, PostListComponent],
  imports: [
    CommonModule
  ],
  exports: [BlogComponent]
})
export class BlogModule { }

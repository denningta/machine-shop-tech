import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostComponent } from './post/post.component';
import { MatIconModule } from '@angular/material/icon';
import { PortableTextModule } from '../shared/portable-text/portable-text.module';
import { BreadcrumbModule } from '../shared/breadcrumb/breadcrumb.module';
import { AppRoutingModule } from '../app-routing.module';
import { BlogLayoutComponent } from './blog-layout/blog-layout.component';
import { AnimateOnScrollModule } from '../directives/animate-on-scroll/animate-on-scroll.module';



@NgModule({
  declarations: [BlogComponent, PostListComponent, PostComponent, BlogLayoutComponent],
  imports: [
    CommonModule,
    MatIconModule,
    PortableTextModule,
    BreadcrumbModule,
    AppRoutingModule,
    AnimateOnScrollModule,
  ],  
  exports: [BlogComponent]
})
export class BlogModule { }

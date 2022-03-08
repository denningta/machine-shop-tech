import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  @Input() listCategory: 'latest' | 'featured' | undefined;

  listTitle: string = 'Posts';
  latestPosts: any;
  featuredPosts: any;
  fillerPosts = Array.from({length: 10}, () => {
    return {
      title: 'Post title',
      readTime: '6 min',
      author: 'Tim'
    }
  });

  constructor() {}

  ngOnInit(): void {
    this.listTitle = 'Blog Posts';
    if (this.listCategory === 'latest') this.listTitle = 'Latest Posts';
    if (this.listCategory === 'featured') this.listTitle = 'Featured Posts';
    this.latestPosts = this.fillerPosts.slice(0, 3);
    this.featuredPosts = this.fillerPosts.slice(0, 4);
  }

}
